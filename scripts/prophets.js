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
        let birthInfo = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('img');
        
        // Set content for the fullName
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthInfo.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Set attributes for the portrait image
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        // Append elements to the card
        card.appendChild(fullName);
        card.appendChild(birthInfo);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // Append the card to the cards container
        cards.appendChild(card);
    });
}

// Fetch and display the data
getProphetData();
