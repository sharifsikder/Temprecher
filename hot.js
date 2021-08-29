const searchButton = () => {

    const inputField = document.getElementById('field-input');
    const inputText = inputField.value;
    inputField.value = '';


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${'7e4b77a442a05b3e612a830c92070454'}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

const displayWeather = (values) =>{
    console.log(values)
    const weatherDiv = document.getElementById('weather');
    weatherDiv.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = ` <h1>${values.name}</h1>
    <h3><span>${Math.floor(values.main.temp-273.15)}</span>&deg;C</h3>
    <h1 class="lead"> Humidity : ${values.main.humidity}</h1>
    <h5>Country : ${values.sys.country}</h5>`;

    weatherDiv.appendChild(div)

   
        
  
}