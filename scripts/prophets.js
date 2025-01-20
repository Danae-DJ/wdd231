const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.tablet(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();

const displayProphets = prophets =>{
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2')
        let portrit = document.createElement('img');

        fullName.textContent = `${prophet.h2}`

        portrit.setAttribute('src', prophet.imageurl);
        portrit.setAttribute('alt', `Portrait of ${prophet.h2}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild();
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}