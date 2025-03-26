const input = document.getElementById('input');
const button = document.getElementById('button');

const city = document.getElementById('city-name');
const temp = document.getElementById('city-temp');
const time = document.getElementById('city-time');
async function loadData(City){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=cca410826cab44b0abd153816252603&q=${City}&aqi=yes
`);
    const data = await response.json();
    return data;
}

async function displayData(){
    const cityValue = input.value;
    const res = await loadData(cityValue);
    city.textContent = data.location.name;
    temp.textContent = data.current.temp_c;
    time.textContent = data.location.localtime;
}
button.addEventListener('click', displayData );