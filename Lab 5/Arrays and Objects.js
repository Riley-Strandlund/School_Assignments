/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.

let latitude = iss_location.iss_position.latitude
let longitude = iss_location.iss_position.longitude
/* Below are alternate ways to assign the variables like above
let position = iss_location.iss_position
let longitude = position.longitude
let latitude = position.latitude
*/
console.log(`\nThe location is ${latitude} ${longitude}\n`)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = "1.1787" //add new entry to rates
console.log(rates)
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)
let euroQuantity = 100
let foreignCurrency = rates.AUD //grabs the value of a currency
let conversionValue = (euroQuantity * foreignCurrency).toFixed(4) //finds the value of 100 euro in another currency

function getKey(rates, foreignCurrency){
  for  (key in rates){ //for the items of currency in rates it loops through the loop
    if (rates[key] == foreignCurrency){ //this finds the equal value of foreignCurrency in rates to grab the key name 
      return key
    }
  }
}
let currencyKey = getKey(rates,foreignCurrency) //activates the 'getKey' function and grabs the 'key' value

console.log(`\n100 Euros convert to ${conversionValue} ${currencyKey}\n`) //prints out how much 100 Euros is converted into

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
function highestExchange(rates,euroQuantity){
  let currency
  let conversionList = [] //list to add converted values
  for (key in rates){
    conversionValue = euroQuantity * rates[key] //for every item in rates it gets the converted value
    conversionList.push(conversionValue) //adds converted values into the array
  }
  delete rates[4] //deletes the last item in rates which is "CHF: 1.1787" that was added further up and was causing me trouble
  let maxValue = Math.max(...conversionList) //finds max value in conversionList and the '...' allows every value to pass through 
  let roundedValue =  parseFloat(maxValue).toFixed(2) //limits number to 2 decimal points
  for (key in rates){
    if (rates[key] === maxValue/euroQuantity){ //grabs the key by comparing values
      currency = key
    }
  }
  return {roundedValue, currency} //returns 2 things
}
const {roundedValue, currency} = highestExchange(rates, euroQuantity) //grabs both returned values

console.log(`100 Euro = ${roundedValue} ${currency}\n`) //prin

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO print Gary Oldman's cat's name
console.log(`cat name ${cats_and_owners[1]['cat']}\n`)
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
let newCelebrity = {name:"Taylor Swift", cat:"Meredith"}
cats_and_owners.push(newCelebrity)
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"
cats_and_owners.forEach( catOwnerObject => {
    
    // catOwnerObject will be each array item in turn
    // Each array item is an object
    // in the form { name: "Snoop Dogg", cat: "Miles Davis"}
    let ownerName = catOwnerObject.name
    let catName = catOwnerObject.cat

    console.log(`${ownerName}'s cat is called ${catName}`)
})


/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },{
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },{
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },{
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },{
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },{
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}

// TODO print the full name of the Literature Nobel laureate.
console.log(`\nName: ${nobel_prize_winners_2017["prizes"][3]["laureates"][0]["firstname"] + " " + nobel_prize_winners_2017["prizes"][3]["laureates"][0]["surname"]}\n`)

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
function physicsLaureates(){
  let laureates = [] //array to contain loreate names
  for (items in nobel_prize_winners_2017["prizes"][0]["laureates"]){ //runs through the code for each item in the physics laureate section
    laureates.push(nobel_prize_winners_2017["prizes"][0]["laureates"][items]["id"])//grabs the id's of each physics laureate and pushes them into the laureates array
  }
  return laureates
}
laureates = physicsLaureates()//calls the function
for (item in laureates){//goes through the laureates array to print each ID
  console.log(`ID: ${nobel_prize_winners_2017["prizes"][0]["laureates"][item]["id"]}`)
}

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
function grabCategories(){
  let categories = []
  for (item in nobel_prize_winners_2017["prizes"]){ //runs through the code for each item in the prizes section
    categories.push(nobel_prize_winners_2017["prizes"][item]['category']) //grabs all of the categories names
  }
  return categories
}
categories = grabCategories() //calls the function
console.log("\n") //clears line
for (item in categories){ //prints the items contained in categories in a more clean way. Less clean {'category':physics...}
  console.log(categories[item])
}

// TODO write code to print the total number of prize categories
let numPrizeCategories = nobel_prize_winners_2017["prizes"].length //grabs length of prize which contains the categories
console.log(`\n${numPrizeCategories} categories`)// prints the length of numPrizeCategories

// TODO write code to count the total number of laureates from 2017. 
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

function countLaureates(){
  let numOfLaureates = [] //array to put all loreates to later count
  for (item in nobel_prize_winners_2017["prizes"]){ //makes sure to go through all indexes in nobel_prize_winners_2017
    if (nobel_prize_winners_2017["prizes"][item]["year"] === "2017"){ //Only add the loreates to be counted if the indexes year is 2017
      for (people in nobel_prize_winners_2017["prizes"][item]["laureates"]){//goes into the loreate section of every index in prizes and excecutes code for everything contained within
        numOfLaureates.push(nobel_prize_winners_2017["prizes"][item]["laureates"][people])//adds all loreate objects from all categories into numOfLoreates
      }
    }
  }
  return numOfLaureates
}

let numOfLaureates = countLaureates() //calls function
console.log(`\n${numOfLaureates.length} laureates`) //determines how many items are within numOfLoreates and prints them









