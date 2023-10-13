let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector('#user-answer')
let submitButton = document.querySelector('#submit-answer')
let resultTextElement = document.querySelector('#result')
let playAgainButtonElement = document.querySelector('#play-again')

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array country names and two-letter country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files included with script elements as one big file,
// organized in the order of the script tags. So the countriesAndCodes array from countries.js
// is available to this script.

console.log(countriesAndCodes);  // You don't need to log countriesAndCodes - just proving it is available 

let alpha2 = '';
let capitalCity = '';
let attempts = 0;
let answeredCorrect = 0;

// TODO when the page loads, select an element at random from the countriesAndCodes array
function getRandomCountry(){
    let randomInteger = Math.floor(Math.random() * countriesAndCodes.length); //gets random number between 0 and final length of array
    let randomcountry = countriesAndCodes[randomInteger]['name'];
    return randomcountry;
}
// TODO display the country's name in the randomCountryElement 
let randomCountry = getRandomCountry();
randomCountryElement.innerHTML = randomCountry;//Display's random element in the country placeholder

function getAlphaCode(randomCountry){
    for (country in countriesAndCodes){
        if (countriesAndCodes[country]['name'] === randomCountry){
            alpha2 = countriesAndCodes[country]['alpha-2'].toLowerCase();
            break;
        }
    }
    return alpha2
}

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare the actual capital city to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example 'Correct! The capital of Germany is Berlin' or 'Wrong - the capital of Germany is not G, it is Berlin'
submitButton.addEventListener('click', function(){
    let answer = userAnswerElement.value.toLowerCase()
    capitalCity = '';
    alpha2 = getAlphaCode(randomCountry);
    
    let worldBankUrl = `https://api.worldbank.org/v2/country/${alpha2}?format=json`;
    fetch(worldBankUrl).then( function(responseFromAPIServer){
        if (!responseFromAPIServer.ok){
            throw new Error('Could not connect to API')
        }
        return responseFromAPIServer.json();
    }).then( function(jsonData){
        capitalCity = jsonData[1][0]['capitalCity'];
        let lowercaseCapitalCity = capitalCity.toLowerCase();
        console.log(capitalCity);
        if (answeredCorrect === 0){
            if (attempts != 3){
                if (answer === lowercaseCapitalCity){
                    resultTextElement.innerHTML = `You are correct the answer is ${capitalCity}`;
                    answeredCorrect += 1;
                }else if (answer != lowercaseCapitalCity){
                    attempts += 1;
                    resultTextElement.innerHTML = `You are wrong. Attempt:${attempts}/3`;
                    console.log(attempts)
                }  
            }else if (attempts === 3){
                resultTextElement.innerHTML = `You have run out of attempts the correct answer was ${capitalCity}`; 
            }
        }else{
            alert('You already gave the correct answer')
        }
        userAnswerElement.value = ''
    })
    .catch(function(error){
        console.error('Error fetching data:', error);
    })
})

// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 
playAgainButtonElement.addEventListener('click', function(){
    capitalCity = '';
    userAnswerElement.value = ''
    randomCountry = getRandomCountry(randomCountry);
    randomCountryElement.innerHTML = randomCountry;
    resultTextElement.innerHTML = 'Replace with result';
})