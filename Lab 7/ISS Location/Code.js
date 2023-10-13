let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeISSLocationFetched = document.querySelector('#time')

let update = 10000 //10000 is milliseconds = 10 seconds
let maxFailedAttempts = 3
let issMarker
let icon = L.icon({
    iconUrl: 'issIcon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

let map = L.map('iss-map').setView([0,0], 1)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token')
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //sets the map image
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' //referenced website
}).addTo(map)

iss(maxFailedAttempts)
//setInterval(iss, update) 

function iss(attempts){
    if (attempts <= 0) {
        alert(`Failed to contact ISS server, failed after several attempts.`)
        return
    }
    fetch(url)
        .then( (res) => {
        return res.json() //turn response into JSON
        })
        .then( (issData) => {
            console.log(issData) // TODO - display data on webpage
            let lat = issData.latitude
            let long = issData.longitude
            issLat.innerHTML = lat
            issLong.innerHTML = long


            // create marker if it doesn't exist
            //move marker if it does exist

            if (!issMarker){
                //create marker
                issMarker = L.marker([lat,long], {icon: icon}).addTo(map)
            }else{
                issMarker.setLatLng([lat, long])
            }

            let now = Date()
            timeISSLocationFetched.innerHTML = `This data was fetched at ${now}`

        })
        .catch( (err) => {
            attempts--
            console.log('Error', err)
        })
        .finally( () => {
            setTimeout(iss, update, attempts)
        })
}
