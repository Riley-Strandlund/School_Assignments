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
fetch(weatherUrl).then( function(responseFromAPIServer) { 
    //have to convert this response - the 1s and 0s from the network - into JSON
    return responseFromAPIServer.json() //creates  another Promise

    // returns a Promise from a then function callback, 
    //we can wait for and handle the response in a chained then function
}).then( function(jsonData){
    let properties = jsonData.properties
    let periods = properties.periods
    console.log(periods)
    periods.forEach(function(forecastPeriod){//each loop creates a new row for each day available
        let forecastPeriodName = forecastPeriod.name
        let temperature = forecastPeriod.temperature
        // ToDo windspeed info
        let windspeed = forecastPeriod.windSpeed
        let forecastImageUrl = forecastPeriod.icon
        let detailedForecast = forecastPeriod.detailedForecast
        
        console.log(forecastPeriodName, temperature, forecastImageUrl)


        //The below creates variables to create new table elements to add api data to the html
        let newTableRowElement = document.createElement('tr')
        weatherTableElement.appendChild(newTableRowElement)
        
        let newForecastPeriodNameElement = document.createElement('td')//creates element
        newForecastPeriodNameElement.innerHTML = forecastPeriodName //assigns element a value
        newTableRowElement.appendChild(newForecastPeriodNameElement)//adds it to the table

        let newTemperatureElement = document.createElement('td')
        newTemperatureElement.innerHTML = temperature + 'F'
        newTableRowElement.appendChild(newTemperatureElement)

        // ToDo - display this in the HTML - create new table elements
        let newWindSpeedElement = document.createElement('td')
        newWindSpeedElement.innerHTML = windspeed
        newTableRowElement.appendChild(newWindSpeedElement)

        let newImageTableDataElement = document.createElement('td')
        let newImageElement = document.createElement('img')
        newImageElement.src = forecastImageUrl //set the source
        newImageTableDataElement.appendChild(newImageElement) //add the img tag
        newTableRowElement.appendChild(newImageTableDataElement) //add the 'td' element to the table row

        //todo detailed forecast
        let newDetailedForecastElement = document.createElement('td')//adds table data section for the forecast
        newDetailedForecastElement.innerHTML = detailedForecast //sets table data element to the api data variable
        newTableRowElement.appendChild(newDetailedForecastElement)//adds new element
        //todo extra credit question see class agenda
    })
})