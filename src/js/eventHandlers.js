import {fetchWeather} from './main.js';

export const handleKeyPress = (input) =>{
    input.addEventListener('keypress', (event) =>{
        if (event.key === 'Enter') {
            const cityName = input.value;
            givenCityName(cityName);  
        }
    });
}

export const handleClickButton = (input) =>{
    document.querySelector('#button').addEventListener('click',  () =>{
        const cityName = input.value;
        givenCityName(cityName);
    }); 
}

const givenCityName = (city) =>{
    if (city) {
        fetchWeather(city)
        if(!city){
            prompt('ingresa un nombre de ciudad o pais valido.')
        }
    }
};