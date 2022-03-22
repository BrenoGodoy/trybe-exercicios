// const { stringify } = require("querystring");

// apiScript.js     
const API_URL = 'https://api.coincap.io/v2/assets';
const criptoContainer = document.getElementById('criptoContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL)
    .then(response => response.json())
    .then(data => data.data)
    .then(criptos => criptos.filter((element) => element.name === 'Bitcoin'))
    .then(getName => getName[0].id)
    .then(goToString => JSON.stringify(goToString))
    .then(cripto => criptoContainer.innerText = cripto);
};

window.onload = () => fetchJoke();