const apiKey = "898636a34e1e8a683a15b0fdb45b2672"

function getWeather(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units=imperial").then(response => response.json()).then(json => {
        document.querySelector("#weather_num_f").innerHTML = parseInt(json.main.temp);
        document.querySelector("#weather_num_c").innerHTML = parseInt((+(json.main.temp) - 32) / 1.8);

        document.querySelector("#feels_like").innerHTML = "Feels like: "+parseInt(json.main.feels_like)+"°F" + "/" + parseInt((+(json.main.feels_like) - 32) / 1.8)+"°C";
        document.querySelector("#temp_min").innerHTML = "Min. temp: "+parseInt(json.main.temp_min)+"°F" + "/" + parseInt((+(json.main.temp_min) - 32) / 1.8)+"°C";
        document.querySelector("#temp_max").innerHTML = "Max temp: "+parseInt(json.main.temp_max)+"°F" + "/" + parseInt((+(json.main.temp_max) - 32) / 1.8)+"°C";
        document.querySelector("#grnd_level").innerHTML = "Ground level: "+parseInt(json.main.grnd_level)+"ft" + "/" + parseInt(json.main.grnd_level / 3.281)+"m";
        document.querySelector("#humidity").innerHTML = "Humidity: "+parseInt(json.main.humidity)+"%";
        document.querySelector("#pressure").innerHTML = "Pressure: "+json.main.pressure;

    })
}

function getCity(cityName) {
    switch(cityName) {
        case "arizona": 
            document.body.id = "arizona";
            getWeather("Arizona");
            break;
        case "phoenix": 
            document.body.id = "phoenix";
            getWeather("Phoenix, Arizona");
            break;
        case "mesa": 
            document.body.id = "mesa";
            getWeather("Mesa, Arizona");
            break;
        case "yuma": 
            document.body.id = "yuma";
            getWeather("Yuma, Arizona");
            break;
        case "bisbee": 
            document.body.id = "bisbee";
            getWeather("Bisbee, Arizona");
            break;
        case "tuscon":
            document.body.id = "tuscon";
            getWeather("Tuscon, Arizona");
            break;
    }
}

getWeather("Arizona");