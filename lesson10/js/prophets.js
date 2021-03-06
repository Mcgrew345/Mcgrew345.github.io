const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let titleDiv = document.createElement('div');
            titleDiv.classList.add('card-title');
            let bodyDiv = document.createElement('div');
            bodyDiv.classList.add('card-body');


            let fullName = document.createElement('h2');
            fullName.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            titleDiv.appendChild(fullName);



            let birthDate = document.createElement('p');
            birthDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            bodyDiv.appendChild(birthDate);


            let birthPlace = document.createElement('p');
            birthPlace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            bodyDiv.appendChild(birthPlace);


            let image = document.createElement('img');
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + (i + 1));
            card.appendChild(titleDiv);
            card.appendChild(image);
            card.appendChild(bodyDiv);

            document.querySelector('div.cards').appendChild(card);

        }
    });