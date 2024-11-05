import {get_weather} from './getWeatherInfo.js';
import {handleKeyPress, handleClickButton} from './eventHandlers.js';
import {errorMessage} from './inputErrorMessage.js';

window.onload = () =>{
    const welcomeText = document.querySelector('.weather-text-hidden');
    welcomeText.classList.remove('weather-text-hidden');
    welcomeText.classList.add('weather-text-visible');
}

export const fetchWeather = (cityName) =>{

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3113fc619295159a9a60d40942781724&units=metric`)
.then(response =>{
    if (!response.ok) {
        const inputContainer = document.querySelector('.input-container');
        const input = document.querySelector('#input');
        errorMessage(inputContainer, input);

        throw new Error('error en la solicitud:' + response.statusText);
    }
    return response.json();
})

.then(data =>{
    
get_weather(data, cityName);
console.log(data);

})

.catch(error =>{
    console.log(error);
    
})

}

const input = document.querySelector('#input');
handleKeyPress(input);
handleClickButton(input);










