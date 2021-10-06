var APIKey = "&appid=348695b7be825684de6066f96d8b32f6";
var userInput = document.querySelector('#city');
var searchButton = document.querySelector('#btn');
var city = "New York"
var currentDate = moment().format('l');

var starterUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

function search(e) {
    searchButton.addEventListener("click", currentweather);
    userInput = userInput.value;
    currentweather(e)
}
function currentweather(e) {
    e.preventDefault();
    var url = starterUrl + userInput + APIKey;
    console.log(url)

}



// fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//         "x-rapidapi-key": "8014487f1emshaa274c05a26e32ap1b8b54jsncaca7949dc19"
//     }
// })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%2Cus", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//         "x-rapidapi-key": "8014487f1emshaa274c05a26e32ap1b8b54jsncaca7949dc19"
//     }
// })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });