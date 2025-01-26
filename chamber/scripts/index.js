//index.js:
// Set current year in footer
const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();

// Set last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Toggle navigation menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class on the nav menu
});
// Switch to list view button
function toggleView() {
    const cardsContainer = document.getElementById('cards');
    const isGrid = cardsContainer.classList.contains('grid');
    cardsContainer.classList.toggle('grid', !isGrid);
    cardsContainer.classList.toggle('list', isGrid);
    viewToggle.textContent = isGrid ? 'Switch to Grid View' : 'Switch to List View';
}

const viewToggle = document.getElementById('viewToggle');
if (viewToggle) {
    viewToggle.addEventListener('click', toggleView);
}

//Current Weather
const form = document.getElementById("weatherform");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResults");

const API_KEY = '330d0457c38e79f15dd5eab574628d9b';

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        weatherResult.innerHTML = '<div class="error-message fade-in">Please enter a city name.</div>';
        return;
    }

    // Display loading message while fetching data
    weatherResult.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial` // "&units=imperial" for Fahrenheit or "&units=metric" for Celsius
        );

        if (!response.ok) {
            throw Error('City Not Found');
        }

        const data = await response.json();

        // Display the weather results
        displayWeatherResults(data);

        // Clear the input field after fetching
        cityInput.value = '';
    } catch (error) {
        weatherResult.innerHTML = `<div class="error-message fade-in">Error: ${error.message}</div>`;
    }
});

function displayWeatherResults(data) {
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // Helper function to create weather result elements
    const createWeatherElement = (icon, label, value) => `
        <div class="weatherResult">
            <i class="${icon}"></i>
            <p>${label}: ${value}</p>
        </div>
    `;

    weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <div class="results">
            ${createWeatherElement('fa-solid fa-temperature-three-quarters', 'Temperature', `${data.main.temp}°F`)}
            <div class="weatherResult">
                <img src="${iconSrc}" alt="${data.weather[0].description}" />
                <p>${data.weather[0].description}</p>
            </div>
            ${createWeatherElement('fa-solid fa-droplet', 'Humidity', `${data.main.humidity}%`)}
            ${createWeatherElement('fa-solid fa-wind', 'Wind Speed', `${data.wind.speed} mph`)}
        </div>
    `;
}





// Fetch and display members

const membersDocument_url = './data/membersIndex.json';
async function fetchMembers() {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML='<p>Loading members...</p>'
    try {
        const response = await fetch(membersDocument_url);
        if (!response.ok) throw new Error('Failed to fetch members');
        const data = await response.json();
        displayMembers(data.Busines);
    } catch (error) {
        console.error('Error:', error);
        cardsContainer.innerHTML = '<p>Unable to load members. Please try again later.</p>';;
    }
}

function displayMembers(members) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = ''; 
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${member.Image || 'images/default-image.jpg'}" alt="${member.businesName || 'Business'}" loading="lazy">
            <h3>${member.businesName || 'Business Name Not Available'}</h3>
            <p>${member.businessTagline || 'No tagline provided.'}</p>
            <a href="${member.URL || '#'}" target="_blank">${member.URL ? 'Visit Website' : 'No Website'}</a>
            <p>Email: <a href="mailto:${member.email || ''}">${member.email || 'Not Provided'}</a></p>
            <p>Phone: ${member.phone || 'Not Provided'}</p>
        `;
        cardsContainer.appendChild(card);
    });
}


fetchMembers();


// Fetch and display news events
const newsDocumentUrl = './data/newsEvents.json';

async function fetchNews() {
    const newsContainer = document.getElementById('newsCards');
    newsContainer.innerHTML = '<p>Loading news...</p>';
    try {
        const response = await fetch(newsDocumentUrl);
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        displayNews(data.News);
    } catch (error) {
        console.error('Error:', error);
        newsContainer.innerHTML = '<p>Unable to load news. Please try again later.</p>';
    }
}

function displayNews(newsList) {
    const newsContainer = document.getElementById('newsCards');
    newsContainer.innerHTML = ''; // Clear previous content

    newsList.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <img src="${news.Image || 'images/default-image.jpg'}" alt="${news.newsName || 'News'}" loading="lazy">
            <h3>${news.newsName || 'News Title Not Available'}</h3>
            <p>Genre: ${news.newsGenre || 'Not Specified'}</p>
            <p>By: ${news.writter || 'Unknown Author'}</p>
            <a href="${news.URL || '#'}" target="_blank">${news.URL ? 'Read More' : 'No URL Available'}</a>
        `;
        newsContainer.appendChild(newsCard);
    });
}

// Initialize fetching of news
fetchNews();
