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

// Fetch and display members
/* one option to work it
async function fetchMembers() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayMembers(data.Busines);
}  second option in case of issues (it's better):*/
const membersDocument_url = './data/members.json';
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
//third option to button... in this case the html only need this reference:
/* <section id="cards" class="grid">
            <button id="viewToggle" aria-label="Toggle between grid and list view">Switch to List View</button> 
    </section>*/
function displayMembers(members) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = ''; // Clear cards and button
    
    // Re-add the button
    const viewToggle = document.createElement('button');
    viewToggle.id = 'viewToggle';
    viewToggle.textContent = 'Switch to List View';
    viewToggle.addEventListener('click', toggleView);
    cardsContainer.appendChild(viewToggle);

    // Add the cards
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
//note: Solution 1 is the cleanest and most modular fix. 
// Moving the button outside the #cards container ensures 
// that dynamic content changes don’t interfere with the 
// button’s functionality or visibility.