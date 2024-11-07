import { addWeatherInfo } from "./addWeatherInfo.js";
import { createSound } from "./createSound.js";

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const get_weather = (data, cityName) =>{
    const input = document.querySelector('#input');
    const normalizedInput = removeAccents(input.value.toLowerCase());
    const normalizedCityName = removeAccents(cityName.toLowerCase());

    if(normalizedCityName === normalizedInput){
        const welcomeTextClassChange = document.querySelector('.weather-text-visible');
       if (!welcomeTextClassChange) return 
        createSound();
        welcomeTextClassChange.classList.add('weather-info');
        addWeatherInfo(data, welcomeTextClassChange, cityName);
        input.value = '';
    }
}


