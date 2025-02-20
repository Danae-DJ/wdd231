//directory.js:
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
const viewToggle = document.getElementById("viewToggle");
const cardsContainer = document.getElementById("cards");

function toggleView() {
    const isGrid = cardsContainer.classList.contains("grid");

    // Toggle classes correctly
    cardsContainer.classList.toggle("grid", !isGrid);
    cardsContainer.classList.toggle("list", isGrid);

    // Fix button text update
    viewToggle.textContent = isGrid ? "Switch to Grid View" : "Switch to List View";
}

// Ensure button exists before adding event listener
if (viewToggle) {
    viewToggle.addEventListener("click", toggleView);
}

const membersDocumentUrl = "./data/members.json";

async function fetchMembers() {
    try {
        const response = await fetch(membersDocumentUrl);
        if (!response.ok) throw new Error("Failed to load members data.");
        
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members:", error);
        cardsContainer.innerHTML = `<p class="error-message">Could not load members. Please try again later.</p>`;
    }
}

function displayMembers(members) {
    cardsContainer.innerHTML = ""; // Clear previous content
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");  

        card.innerHTML = `
            <img src="${member.Image || 'images/default-image.jpg'}" alt="${member.businesName || 'Business'}" width="250" loading="lazy">
            <h3>${member.businesName || 'Business Name Not Available'}</h3>
            <p>Tagline: ${member.businessTagline || 'No tagline available'}</p>
            <p>Phone: ${member.phone || 'No phone number'}</p>
            <a href="${member.URL || '#'}" target="_blank">${member.URL ? 'Visit Website' : 'No Website'}</a>
        `;
        cardsContainer.appendChild(card);
    });
}

fetchMembers();
// Ensure the function is called on page load

/*const membersDocumentUrl = './data/members.json';

async function fetchMembers() {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '<p>Loading members...</p>';
    try {
        const response = await fetch(membersDocumentUrl);
        const data = await response.json();
        displayMembers(data.Members);
    } catch (error) {
        cardsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
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
            <p>Tagline: ${member.businessTagline || 'No tagline available'}</p>
            <p>Phone: ${member.phone || 'No phone number'}</p>
            <a href="${member.URL || '#'}" target="_blank">${member.URL ? 'Visit Website' : 'No Website'}</a>
        `;
        cardsContainer.appendChild(card);
    });
}
*/