import {get_weather} from './getWeatherInfo.js';
import {handleKeyPress, handleClickButton} from './eventHandlers.js';
import {errorMessage, removeErrorMessage} from './inputErrorMessage.js';
import {openingPage} from './windowOnLoad.js';
import {sameCitySearch} from './sameCitySearch.js';

window.onload = openingPage();
let lastCity ='';
export const fetchWeather = (cityName) =>{
    console.log(lastCity);

if(sameCitySearch(cityName, lastCity)) return

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3113fc619295159a9a60d40942781724&units=metric`)
.then(response =>{
    const inputContainer = document.querySelector('.input-container');
    const input = document.querySelector('#input');

    if (!response.ok) {
        errorMessage(inputContainer, input);
        throw new Error('error en la solicitud:' + response.statusText);
    }
    if (response.ok) {
        removeErrorMessage(inputContainer, input);
    }
    return response.json();
})

.then(data =>{

lastCity = cityName;    
get_weather(data, cityName);
console.log(data);

})

.catch(error =>{
    console.log(error);
    
})

}

handleKeyPress(input);
handleClickButton(input);










