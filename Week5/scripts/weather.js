const apiKey = "898636a34e1e8a683a15b0fdb45b2672"

function getWeather(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units=imperial").then(response => response.json()).then(json => {
        document.querySelector("#weather_num_f").innerHTML = parseInt(json.main.temp);
        document.querySelector("#weather_num_c").innerHTML = parseInt((+(json.main.temp) - 32) / 1.8);
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