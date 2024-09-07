const apiKey = 'b36ba823c4c4700f1c5f68297fefb154';
const baseUrl = 'https://api.openweathermap.org';

const villeInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

const erreur404 = document.querySelector(".erreur404");
const meteoInfos = document.querySelector(".meteo-infos")

searchBtn.addEventListener('click', () => {
    if (villeInput.value.trim() != '') {
        updateMeteoInfo(villeInput.value);
        villeInput.value = '';
        villeInput.blur();
    }
})

villeInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && villeInput.value.trim() != '') {
        updateMeteoInfo(villeInput.value);
        villeInput.value = '';
        villeInput.blur();
    }
})

async function getFetchData(endPoint, city ) {
    const apiUrl = `${baseUrl}/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
    const reponse = await fetch(apiUrl );
    return reponse.json(); 
}

async function updateMeteoInfo(city) {
    const meteoData = await getFetchData('weather', city);
    console.log(meteoData);
    if(meteoData.cod != 200){
        showdisplaySelection()
        return
    }
}

function showdisplaySelection(section) {
    [meteoInfos, searchBtn, erreur404 ]
}