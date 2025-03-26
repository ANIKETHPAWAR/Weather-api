const input = document.getElementById('input');
const button = document.getElementById('search-btn');

const city = document.getElementById('city-name');
const temp = document.getElementById('city-temp');
const time = document.getElementById('city-time');
async function loadData(city){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=cca410826cab44b0abd153816252603&q=${city}&aqi=yes`);
    const data = await response.json();
    return data;
}

async function displayData(){
    const cityValue = input.value;
    const res = await loadData(cityValue);
    city.innerText = `Location:${res.location.name},${res.location.region}- ${res.location.country}`;
  
    time.innerText = `Local Time:${res.location.localtime}`;
    console.log("done")
}
button.addEventListener('click', displayData );