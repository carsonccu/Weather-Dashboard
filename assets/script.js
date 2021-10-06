var APIKey = "&appid=348695b7be825684de6066f96d8b32f6";
var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiURLonecallb = "https://api.openweathermap.org/data/2.5/onecall?";

var history = JSON.parse(window.localStorage.getItem("city-input")) || {};

searchContainer = document.querySelector("#container");
searchButton = document.querySelector("#searchbtn");
currentWeather = document.querySelector("#currentWeather");
fiveDay = document.querySelector("#fiveDayForecast");
cityText = document.querySelector("#city-input");
