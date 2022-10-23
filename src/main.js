const URL = 'https://api.thedogapi.com/v1/images/search';

const img = document.querySelector('img');
const btn = document.querySelector('#btnGenerate');

btn.addEventListener('click', generateImg);

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    console.log(response);
    const data = await response.json();
    console.log(data[0])
    //console.log(data[0].url);
    img.src = data[0].url;
}

function generateImg() {
    fetchData(URL);
    //console.log('My button');
}