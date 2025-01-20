const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.tablet(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();

const displayProphets = prophets => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        //let birthInfo = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        //birthInfo.textContent = `Date of Birth: ${prophet.birthdate} | Place of Birth: ${prophet.birthplace}`;

        portrit.setAttribute('src', prophet.imageurl);
        portrit.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        //card.appendChild(birthInfo);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}