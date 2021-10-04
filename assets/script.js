var APIKey = "&appid=348695b7be825684de6066f96d8b32f6";
var userInput = document.querySelector("#city");
var searchButton = document.querySelector("#btn btn-primary btn-lg btn-block");
var city = "New York"

var starterUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

function search(e) {
    userInput = userInput.value;
    currentweather(e)
}
function currentweather(e) {
    e.preventDefault();

}

searchButton.addEventListener("click", currentweather);
