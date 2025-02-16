//discover.js
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


//Visit message introduction
document.addEventListener("DOMContentLoaded", () => {
    const visitMessage = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysPassed = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysPassed < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysPassed === 1) {
            visitMessage.textContent = `You last visited 1 day ago.`;
        } else {
            visitMessage.textContent = `You last visited ${daysPassed} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentVisit);
});



document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/locations.json") 
        .then(response => response.json())
        .then(data => displayLocations(data))
        .catch(error => console.error("Error loading JSON:", error));
});

function displayLocations(locations) {
    const container = document.querySelector(".discover-grid");

    locations.forEach(location => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${location.title}</h2>
            <figure>
                <img src="${location.image}" alt="${location.alt}" width="300" height="200" loading="lazy">
            </figure>
            <address>${location.address}</address>
            <p>${location.description}</p>
            <button>${location.buttonText}</button>
        `;

        container.appendChild(card);
    });
}
