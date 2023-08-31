//TODO LIST
// 1. Create a localstorage function to store the cities
// 2. Create a function to display the cities
// 3. Create a function to display the current weather
// 4. Create a function to display the 5 day forecast
// 5. Create a function to display the UV index (optional)
// 6. Create a function to display the weather icons (optional)


// Verify if function works.

function displayCurrentWeather() {
    $.ajax({
        url: current_weather_url,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var currentWeather = $("#current-weather");
        currentWeather.empty();
        var currentCity = $("<h3>").text(response.name);
        var currentTemp = $("<p>").text("Temperature: " + response.main.temp);
        var currentHumidity = $("<p>").text("Humidity: " + response.main.humidity);
        var currentWind = $("<p>").text("Wind Speed: " + response.wind.speed);
        var currentUV = $("<p>").text("UV Index: " + response.main.uv);
        currentWeather.append(currentCity, currentTemp, currentHumidity, currentWind, currentUV);
    });
}



// OpenWeather API & Key////////////////////////////////

url = "https://api.openweathermap.org/data/2.5/forecast?q=";    
currenturl = "https://api.openweathermap.org/data/2.5/weather?q=";
APIkey = "986630840632a725369847b0bec6ba74"; // Generated API Key
queryurl = url + city + APIkey;
current_weather_url = currenturl + city + APIkey; 

///////////////////////////////////////////////////////

