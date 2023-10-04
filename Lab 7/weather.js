alert('hello!')
let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let weatherTableElement = document.querySelector('#weather-forecast')

// stuff we care about object/properties/periods/data

/*
    fetch() returns a Promise(which is a thing in javascript) -
    promises to tell you if the data is ready, or if there was an error (e.g. no network connection, 
    server down, incorrect url)

    "resolving promises" the promise at some point provides data or reports error.
*/
/*
    handle results from promises whith then()
    then() takes another function definition as an argument
    then() calls that function when the promise resolves.

    argument to then() is the data the promise resolves to - the data from the API server
    this data is bytes - 1s and 0s.
*/
fetch(weatherUrl).then( function(responseFromAPIServe) { 
    //have to convert this response - the 1s and 0s from the network - into JSON
    return responseFromAPIServe.json() //creates  another Promise

    // returns a Promise from a then function callback, 
    //we can wait for and handle the response in a chained then function
}).then( function(jsonData){
    let properties = jsonData.properties
    let periods = properties.periods
    console.log(periods)
    periods.forEach(function(forecastPeriod){
        let forecastPeriodName = forecastPeriod.name
        let temperature = forecastPeriod.temperature
        let forecastImageUrl = forecastPeriod.icon
        // ToDo windspeed info
        console.log(forecastPeriodName, temperature, forecastImageUrl)
        // ToDo - display this in the HTML - create new table elements

        let newTableRowElement = document.createElement('tr')
        weatherTableElement.appendChild(newTableRowElement)
        
        let newForecastPeriodNameElement = document.createElement('td')
        newForecastPeriodNameElement.innerHTML = forecastPeriodName
        newTableRowElement.appendChild(newForecastPeriodNameElement)

        let newTemperatureElement = document.createElement('td')
        newTemperatureElement.innerHTML = temperature + 'F'
        newTableRowElement.appendChild(newTemperatureElement)

        let newImageTableDataElement = document.createElement('td')
        let newImageElement = document.createElement('img')
        newImageElement.src = forecastImageUrl //set the source
        newImageTableDataElement.appendChild(newImageElement) //add the img tag
        newTableRowElement.appendChild(newImageTableDataElement) //add the 'td' element to the table row

        //todo detailed forecast
        //todo extra credit question see class agenda
    })
})


















