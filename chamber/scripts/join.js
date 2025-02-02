//join.js
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

//cards and modals
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Grab the query string from the URL (everything after ?)
const params = new URLSearchParams(window.location.search);
document.getElementById('results').innerHTML = `
  <p>Thank you, ${params.get("first")} ${params.get("last")}!</p>
`;

// Function to safely retrieve form values
function show(key) {
    return params.get(key) || 'Not provided'; // Default message if key is missing
}

// Inject form data into the results div
const showInfo = document.querySelector('#results');
showInfo.innerHTML = `  
  <p>Thank you, ${show("first")} ${show("last")}!</p>
  <p>Your email: ${show('email')}</p>
  <p>Your phone: ${show('phone')}</p>
  <p>Business Name: ${show('Business Name')}</p>
  <p>Submitted on: ${show('timestamp')}</p>
`;