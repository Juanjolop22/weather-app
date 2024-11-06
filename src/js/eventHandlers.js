import {fetchWeather} from './main.js';

export const handleKeyPress = (input) =>{
    input.addEventListener('keypress', (event) =>{
        if (event.key === 'Enter') {
            processCityInput(input);  
        }
    });
}

export const handleClickButton = (input) =>{
    document.querySelector('#button').addEventListener('click',  () =>{
        processCityInput(input);

    }); 
}

const processCityInput = (input) => {
    const cityName = input.value;
    if (!cityName) return;
    fetchWeather(cityName);
};