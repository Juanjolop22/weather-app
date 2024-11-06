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

        const sound = document.createElement('audio');
        sound.src = '/public/assets/zapsplat_vehicles_aircraft_call_bell_dual_tone_44562.mp3';
        sound.play();
        
        welcomeTextClassChange.classList.add('weather-info');
        welcomeTextClassChange.innerHTML = 
           `<h2>Clima en ${cityName}</h2>
            ${insertIconClimate(data.main.temp)}
            <i class="fas fa-cloud"></i>
            <p class="temp-info">- Temperatura: ${data.main.temp}°C</p>
            <p class="humidity-info">- Humedad: ${data.main.humidity}%</p>
            <p class="wind-info">- Velocidad del viento: ${data.wind.speed} m/s</p>`; 
            console.log(normalizedCityName)
    }
}

const insertIconClimate = (temperature) =>{
    if(!temperature) return 
    if (temperature <= 20) {
        return '<i class="fas fa-snowflake"></i>'
    }
    if (temperature >= 20) {
        return '<i class="fas fa-fire"></i>'
    }
}
