const city = 'Manila';
const api = 'a73107757be5d2a9efac11af1dab399c';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

console.log(url);

const weather_display = document.querySelector('.weather');

async function GetWeather()
{   const response = await fetch(url);
    const data = await response.json();
    weather_display.innerHTML = "Weather: " + data.weather[0].description;
    
    console.log(data.weather[0].main);
}

GetWeather();

