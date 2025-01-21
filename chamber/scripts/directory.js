//directory.js:
const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu
document.getElementById('menuToggle').addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show'); // Toggle the 'show' class on the nav links
});

const cardsContainer = document.getElementById('cards');

// Fetch data from members.json
async function fetchMembers() {
    try {
        const response = await fetch('./data/members.json');
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        displayMembers(data.Busines);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

// Function to create member cards
function displayMembers(members) {
    members.forEach((member) => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${member.Image}" alt="${member.businesName}" class="card-image">
            <h3>${member.businesName}</h3>
            <p>${member.businessTagline}</p>
            <a href="${member.URL}" target="_blank">Visit Website</a>
            <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
            <p>Phone: ${member.phone}</p>
        `;

        cardsContainer.appendChild(card);
    });
}

// Call fetch function to load members
fetchMembers();

const viewToggle = document.getElementById('viewToggle');

viewToggle.addEventListener('click', () => {
    const isGrid = cardsContainer.classList.contains('grid');
    cardsContainer.classList.toggle('grid', !isGrid);
    cardsContainer.classList.toggle('list', isGrid);
    viewToggle.textContent = isGrid ? 'Switch to Grid View' : 'Switch to List View';
});



document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
