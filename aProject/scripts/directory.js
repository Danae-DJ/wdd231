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

const membersDocument_url = './data/members.json';

async function fetchMembers() {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '<p>Loading members...</p>';
    try {
        const response = await fetch(membersDocument_url);
        const data = await response.json();
        renderCards(data);
    } catch (error) {
        cardsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function renderCards(members) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        cardsContainer.appendChild(card);
    });
}

fetchMembers();
