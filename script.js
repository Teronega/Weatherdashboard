//TODO LIST
// 1. Create a localstorage function to store the cities
// 2. Create a function to display the cities
// 3. Create a function to display the current weather
// 4. Create a function to display the 5 day forecast


localStorage.setItem("cities", JSON.stringify([]));

function addEventListeners() {
    $("#search-button").on("click", function() {
        var city = $("#city-input").val();
        console.log(city);
        displayCurrentWeather();
    });
}


// Viewable on console; $.ajax calls to OpenWeather API
// Once pulled, "then" shows the data in the console

function displayCurrentWeather() {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=melbourne&appid=986630840632a725369847b0bec6ba74",
    }).then(function(response) {
        console.log(response);
        console.log("Temperature", response.main.temp);
        console.log("Feels Like", response.main.feels_like);
        console.log("Wind Speed", response.wind.speed);
        console.log("Humidity", response.main.humidity);
    });
}



// OpenWeather API & Key////////////////////////////////

url = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";    
currenturl = "api.openweathermap.org/data/2.5/forecast?q=";
APIkey = "986630840632a725369847b0bec6ba74"; // Generated OpenWeather API Key
queryurl = url + city + APIkey;
current_weather_url = currenturl + city + APIkey; 

///////////////////////////////////////////////////////