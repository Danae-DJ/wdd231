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

viewToggle.addEventListener('click', toggleView);


// Fetch and display members
/* one option to work it
async function fetchMembers() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayMembers(data.Busines);
}  second option in case of issues (it's better):*/
async function fetchMembers() {
    try {
        const response = await fetch('./data/members.json');
        if (!response.ok) throw new Error('Failed to fetch members');
        const data = await response.json();
        displayMembers(data.Busines);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('cards').innerHTML = '<p>Unable to load members. Please try again later.</p>';
    }
}

function displayMembers(members) {
    const cardsContainer = document.getElementById('cards');
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${member.Image}" alt="${member.businesName}" loading="lazy">
            <h3>${member.businesName}</h3>
            <p>${member.businessTagline}</p>
            <a href="${member.URL}" target="_blank">Visit Website</a>
            <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
            <p>Phone: ${member.phone}</p>
        `;
        cardsContainer.appendChild(card);
    });
}


fetchMembers();
