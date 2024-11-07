export const addWeatherInfo = (data, welcomeTextClassChange, cityName) => {
welcomeTextClassChange.innerHTML = 
`<h2>Clima en ${cityName}</h2>
 ${insertIconClimate(data.main.temp)}
 <i class="fas fa-cloud"></i>
 <p class="temp-info">- Temperatura: ${data.main.temp}°C</p>
 <p class="humidity-info">- Humedad: ${data.main.humidity}%</p>
 <p class="wind-info">- Velocidad del viento: ${data.wind.speed} m/s</p>`; 
 console.log(cityName);
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