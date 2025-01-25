//Api.js:
const form = document.getElementById("weatherform");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResults");

const API_KEY = `330d0457c38e79f15dd5eab574628d9b`;

form.addEventListener("submit", async(event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        weatherResult.innerHTML ='<p>Please enter a city name.</p>'
        return;
    }

    try {
        const response = await fetch(  
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`//"&units=imperial" or "&units=metric"
        );

        if (!response.ok) {
            throw Error('City Not Found')
        }

        const data = await response.json();

        weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <div class="results">
            <i class="fa-solid fa-temperature-three-quarters"></i>
            <p>Temperature: ${data.main.temp}°F</p>
        </div>
        `
    } catch {

    }
})















/* 
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/3.0/onecall?lat={49.750495}&lon={6.639948}&exclude={metric}&appid={f7060f0705215f1fd4ddaccd903a77a6}';
async function  apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());  
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const description = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;
  }

  apiFetch();

  //continue the activite videos: https://weblabs.spartandesignuniversity.com/current-weather-api.php 
  */