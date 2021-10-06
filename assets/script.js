var APIKey = "&appid=348695b7be825684de6066f96d8b32f6";
var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var fivedayforecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
var unitMeasurement = "&units=imperial";

var history = JSON.parse(window.localStorage.getItem("city-input")) || [];

searchContainer = document.querySelector("#container");
searchButton = document.querySelector("#searchbtn");
currentWeather = document.querySelector("#currentWeather");
fiveDay = document.querySelector("#fiveDayForecast");
cityText = document.querySelector("#city-input");
var currentDate = moment().format('l');

searchButton.addEventListener('click', search);

function search(e) {
    userCity = cityText.value;
    currentDay(e);
}

function currentDay(e) {
    e.preventDefault();
    finalUrl = apiURL + userCity + APIKey + unitMeasurement;
    console.log(finalUrl)
    fetch(finalUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.querySelector("#city-name").innerHTML = userCity + "(" + currentDate + ")" + '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"></img>';
            document.querySelector("#today-temp").innerHTML = data.main.temp + " F";
            document.querySelector("#today-wind").innerHTML = data.wind.speed + " MPH";
            document.querySelector("#today-humidity").innerHTML = data.main.humidity + "%";

            fiveday(e)
            uvi(e)

            function uvi(e) {
                e.preventDefault();
                var lat = data.coord.lat;
                var lon = data.coord.lon;
                uviURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + APIKey;

                fetch(uviURL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        document.querySelector("#today-uvi").innerHTML = data[0].value;
                    })
            }
        })
}

function fiveday(e) {
    e.preventDefault();
    fivedayurl = fivedayforecast + userCity + APIKey + unitMeasurement;
    fetch(fivedayurl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // day 1
            document.querySelector("#icon1").innerHTML = ('<img src="http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png"></img>');
            document.querySelector("#temp1").innerHTML = data.list[0].main.temp + " F"
            document.querySelector("#wind1").innerHTML = data.list[0].wind.speed + " MPH";
            document.querySelector("#humidity1").innerHTML = data.list[0].main.humidity + "%";
            // Day 2
            document.querySelector("#icon2").innerHTML = ('<img src="http://openweathermap.org/img/w/' + data.list[1].weather[0].icon + '.png"></img>');
            document.querySelector("#temp2").innerHTML = data.list[1].main.temp + " F"
            document.querySelector("#wind2").innerHTML = data.list[1].wind.speed + " MPH";
            document.querySelector("#humidity2").innerHTML = data.list[1].main.humidity + "%";
            // Day 3
            document.querySelector("#icon3").innerHTML = ('<img src="http://openweathermap.org/img/w/' + data.list[2].weather[0].icon + '.png"></img>');
            document.querySelector("#temp3").innerHTML = data.list[2].main.temp + " F"
            document.querySelector("#wind3").innerHTML = data.list[2].wind.speed + " MPH";
            document.querySelector("#humidity3").innerHTML = data.list[2].main.humidity + "%";
            // Day 4
            document.querySelector("#icon4").innerHTML = ('<img src="http://openweathermap.org/img/w/' + data.list[3].weather[0].icon + '.png"></img>');
            document.querySelector("#temp4").innerHTML = data.list[3].main.temp + " F"
            document.querySelector("#wind4").innerHTML = data.list[3].wind.speed + " MPH";
            document.querySelector("#humidity4").innerHTML = data.list[3].main.humidity + "%";
            // Day 5
            document.querySelector("#icon5").innerHTML = ('<img src="http://openweathermap.org/img/w/' + data.list[4].weather[0].icon + '.png"></img>');
            document.querySelector("#temp5").innerHTML = data.list[4].main.temp + " F"
            document.querySelector("#wind5").innerHTML = data.list[4].wind.speed + " MPH";
            document.querySelector("#humidity5").innerHTML = data.list[4].main.humidity + "%";
        })
};

function save() {
    history.pushState(userCity);
    localStorage.setItem("history", JSON.stringify(history));
}
