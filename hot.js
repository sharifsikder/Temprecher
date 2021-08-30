document.getElementById('spiner').style.display = 'none';

const searchButton = () => {
    document.getElementById('spiner').style.display = 'block';

    
    const inputField = document.getElementById('field-input');
    const inputText = inputField.value;
    inputField.value = '';

    if(inputText.length == 0){

        document.getElementById('spiner').style.display = 'none';
    }

    
    const apikey = '7e4b77a442a05b3e612a830c92070454'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apikey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

const displayWeather = (value) =>{
    document.getElementById('spiner').style.display = 'none';
    console.log(value)
    const weatherDiv = document.getElementById('weather');
    weatherDiv.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = ` <h1>${value.name}</h1>
    <h3><span>${(value.main.temp-273.15).toFixed(2)}</span>&deg;C</h3>
    <h1 class="lead"> Humidity : ${value.main.humidity}</h1>
    <h5>Country : ${value.sys.country}</h5>`;

    weatherDiv.appendChild(div)      
  
}