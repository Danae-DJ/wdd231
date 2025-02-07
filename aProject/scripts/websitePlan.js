
const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();


const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;
