const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const city = jsonObject['towns'];
        const preston = city.filter(x => x.name.includes("Soda Springs"));
        const events = preston[0].events;

        events.forEach(event => {
            let info = document.createElement('p');
            info.innerText = event
            document.querySelector('div.events').appendChild(info);
        })})