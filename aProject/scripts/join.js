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

// Ensure all modals are hidden on page load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none"; // Hide all modals initially
    });

    // Add event listeners to all modal buttons
    document.querySelectorAll(".card button").forEach(button => {
        button.addEventListener("click", event => {
            const modalId = event.target.getAttribute("onclick").match(/'([^']+)'/)[1];
            openModal(modalId);
        });
    });
});

// Function to open modals
function openModal(id) {
    console.log(`Opening modal: ${id}`); // Debugging log
    document.getElementById(id).style.display = 'block';
}

// Function to close modals
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

// Handle form query parameters
const params = new URLSearchParams(window.location.search);
const resultsDiv = document.getElementById('results');

if (resultsDiv) {
    resultsDiv.innerHTML = `
      <p>Thank you, ${params.get("first") || "Guest"} ${params.get("last") || ""}!</p>
      <p>Your email: ${params.get("email") || "Not provided"}</p>
      <p>Your phone: ${params.get("phone") || "Not provided"}</p>
      <p>Business Name: ${params.get("Business Name") || "Not provided"}</p>
      <p>Submitted on: ${params.get("timestamp") || "Not provided"}</p>
    `;
}
