
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

// Visit message introduction
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

// Fetch the locations data from the JSON file
fetch('data/locations.json')
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    const places = data.places;  // Extract the array of places

    // Get the container element where you want to display the locations
    const locationsContainer = document.getElementById('locations-container');

    // Loop through the places and create HTML elements for each place
    places.forEach(place => {
      const placeElement = document.createElement('div');
      placeElement.classList.add('card');  // Use 'card' class for styling
  
      // Add the content with matching classes
      placeElement.innerHTML = `
          <img src="${place.image}" alt="${place.alt}" class="place-image" width="150" loading="lazy">
          <h3 class="place-title">${place.title}</h3>
          <p class="place-description">${place.description}</p>
          <p class="place-address">${place.address}</p>
          <button class="learn-more">${place.buttonText}</button>
      `;
  
      // Append the new place element to the container
      locationsContainer.appendChild(placeElement);
  });
  
  })
  .catch(error => console.error('Error fetching the locations data:', error));
