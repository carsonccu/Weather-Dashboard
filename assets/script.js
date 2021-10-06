var APIKey = "&appid=348695b7be825684de6066f96d8b32f6";
var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var fiveday = "https://api.openweathermap.org/data/2.5/forecast?q=";
var unitMeasurement = "&units=imperial";

var history = JSON.parse(window.localStorage.getItem("city-input")) || [];

searchContainer = document.querySelector("#container");
searchButton = document.querySelector("#searchbtn");
currentWeather = document.querySelector("#currentWeather");
fiveDay = document.querySelector("#fiveDayForecast");
cityText = document.querySelector("#city-input");

searchButton.addEventListener('click', search);

function search(e) {
    userCity = cityText.value;
    currentDay(e);
}

function currentDay(e) {
    e.preventDefault();
    finalUrl = apiURL + userCity + APIKey + unitMeasurement;
    console.log(finalUrl)
}
