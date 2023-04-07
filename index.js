let city = 'Manila';
const api = 'a73107757be5d2a9efac11af1dab399c';
const current_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
const forecast_url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`

console.log(current_url);

const city_display = document.querySelector('.city');
const temp_display = document.querySelector('.current_temp');

const current_weather = document.querySelector('.current .current_weather .weather');
const current_weather_icon = document.querySelector('.weather_icon');

const forecast_container = document.querySelector('.forecast');
const weather_box = document.querySelector('.weather_box');

async function GetWeather()
{   
    const response = await fetch(current_url);
    const current_weather_data = await response.json();

    const response_forecast = await fetch(forecast_url);
    const forecast_weather_data = await response_forecast.json();

    city_display.innerHTML = current_weather_data.name;
    //current weather
    
    GetCurrentWeather(current_weather_data);
    Forecast(forecast_weather_data);
    console.log(current_weather_data);
}
function GetCurrentWeather(data)
{
    temp_display.innerHTML = data.main.temp + "<span>°C";

    current_weather.innerHTML = data.weather[0].description;
    current_weather_icon.innerHTML = `<img src=https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`;
    
}
function Forecast(data)
{
    let x = 12;
    const weatherBox = weather_box.cloneNode(true);

    weather_box.querySelector('.date').innerHTML = data.list[1].dt_txt;
    weather_box.querySelector('.weather_icon').innerHTML = `<img src=https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png>`;
    weather_box.querySelector('.weather').innerHTML = data.list[1].weather[0].main;

    for (let i = 2; i < x; i++) {
        const weatherBox = weather_box.cloneNode(true);

        weatherBox.querySelector('.date').innerHTML = data.list[i].dt_txt;
        weatherBox.querySelector('.weather_icon').innerHTML = `<img src=https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png>`;
        weatherBox.querySelector('.weather').innerHTML = data.list[i].weather[0].main;
        forecast_container.appendChild(weatherBox);
    }
}

GetWeather();

