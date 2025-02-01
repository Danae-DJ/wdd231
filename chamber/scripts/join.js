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









// Grab the query string from the URL (everything after ?)
const params = new URLSearchParams(window.location.search);

// Function to safely retrieve form values
function show(key) {
    return params.get(key) || 'Not provided'; // Default message if key is missing
}

// Inject form data into the results div
const showInfo = document.querySelector('#results');
showInfo.innerHTML = `  
    <p>Appointment for ${show("first")} ${show("last")}</p>
    <p>Proxy ${show('ordinance')} on ${show('fecha')} in the ${show('location')}</p>
    <p>Your Phone: ${show('phone')}</p>
    <p>Your Email: ${show('email')}</p>
`;