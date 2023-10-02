let metroAreaCenterCoordinates = [44.96, -93.2]  // Array of latitude and longitude 
let zoomLevel = 9   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel) //L is a built in variable for leaflet that has a method called map.

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]




campuses.forEach(function(collegeCampus){
    let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})

markers = collegeCampus()


/*
let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates)
    .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
    .addTo(map)

let stPaulCoordinates = [44.9483, -93.1099]
let stpMarker = L.marker(stPaulCoordinates)
    .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
    .addTo(map)

let normandaleCoordinates = [44.8297, -93.3312]
let nmdlMarker = L.marker(normandaleCoordinates)
    .bindPopup('Normandale College<br><a href="https://www.normandale.edu/">Website</a>')
    .addTo(map)

let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'blue',
    radius: 30000,
    fillOpacity: 0.1
})
    .bindPopup('Twin Cities Metro Area')
    .addTo(map)
*/


