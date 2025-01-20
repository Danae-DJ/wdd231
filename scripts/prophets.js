const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        // Create elements for the card
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        
        // Set content for the fullName
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set attributes for the portrait image
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        // Append elements to the card
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append the card to the cards container
        cards.appendChild(card);
    });
}

// Fetch and display the data
getProphetData();
