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


//by message of viste:
// COPEN.IO example: https://codepen.io/blazzard-jason/pen/WNZvOEK
//