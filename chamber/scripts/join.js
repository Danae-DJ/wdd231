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