//const URL = 'https://api.thedogapi.com/v1/images/search';
//Ading query parameter
const URL = 'https://api.thedogapi.com/v1/images/search?limit=3&api_key=live_gyh9rjGWMEWR0gcjTZLgCGwc6jMMoDKAGgzk8p9AoWDwBtfnUxZWKamHrygcu6gp';

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const btn = document.querySelector('#btnGenerate');

btn.addEventListener('click', generateImg);

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    console.log(response);
    const data = await response.json();
    console.log(data)
    //console.log(data[0].url);
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}

function generateImg() {
    fetchData(URL);
    //console.log('My button');
}