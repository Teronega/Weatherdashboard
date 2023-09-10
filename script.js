//TODO LIST
// 1. Create a localstorage function to store the cities
// 2. Create a function to display the cities
// 3. Create a function to display the current weather
// 4. Create a function to display the 5 day forecast


localStorage.setItem("cities", JSON.stringify([]));

$("#searchBtn").on("click", function () {
    var city = $("#searchBar").val();
    console.log(city);
    displayCurrentWeather(city);
    displayForecast(city);
});

// Variables for the HTML elements

var currentTemperature = document.querySelector(".Temperature");
var feelsLike = document.querySelector(".feelsLike");
var Humidity = document.querySelector(".Humidity");
var windSpeed = document.querySelector(".windSpeed");
var forecastContainer = document.querySelector(".container");

// Viewable on console; $.ajax calls to OpenWeather API
// Once pulled, "then" shows the data in the console
// When putting ${etc} in the URL, it will pull the data from the search bar

function displayCurrentWeather(city) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=986630840632a725369847b0bec6ba74&units=imperial`,
    }).then(function (response) {
        console.log(response);
        console.log("Temperature", response.main.temp);
        console.log("Feels Like", response.main.feels_like);
        console.log("Wind Speed", response.wind.speed);
        console.log("Humidity", response.main.humidity);
        currentTemperature.textContent = "Temperature: " + response.main.temp;
        feelsLike.textContent = "Feels Like: " + response.main.feels_like;
        windSpeed.textContent = "Wind Speed: " + response.wind.speed;
        Humidity.textContent = "Humidity: " + response.main.humidity;
    });
}

function displayForecast(city) {

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=986630840632a725369847b0bec6ba74&units=imperial`,


// For loop to display the 5 day forecast. Manifests cards and appends information to the HTML.
// i=i+8 to display the forecast for every 24 hours. Can be changed to i=i+4 to display every 12 hours.

    })
        .then(function (response) {
            console.log(response);
            for(let i=4; i<response.list.length; i=i+8){
                var card = document.createElement("div");
                card.classList.add("card");
                var cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
                var date = document.createElement("h5");
                date.classList.add("card-title");
                date.textContent = response.list[i].dt_txt;
                var temp = document.createElement("p");
                temp.classList.add("card-text");
                temp.textContent = "Temperature: " + response.list[i].main.temp;
                var feelsLike = document.createElement("p");
                feelsLike.classList.add("card-text");
                feelsLike.textContent = "Feels Like: " + response.list[i].main.feels_like;
                var windSpeed = document.createElement("p");
                windSpeed.classList.add("card-text");
                windSpeed.textContent = "Wind Speed: " + response.list[i].wind.speed;
                var humidity = document.createElement("p");
                humidity.classList.add("card-text");
                humidity.textContent = "Humidity: " + response.list[i].main.humidity;
                cardBody.appendChild(date);
                cardBody.appendChild(temp);
                cardBody.appendChild(feelsLike);
                cardBody.appendChild(windSpeed);
                cardBody.appendChild(humidity);
                card.appendChild(cardBody);
                forecastContainer.appendChild(card);
                
            }
        })
}


// OpenWeather API & Key////////////////////////////////

url = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";
currenturl = "api.openweathermap.org/data/2.5/forecast?q=";
APIkey = "986630840632a725369847b0bec6ba74"; // Generated OpenWeather API Key
queryurl = url + city + APIkey;
current_weather_url = currenturl + city + APIkey;

///////////////////////////////////////////////////////