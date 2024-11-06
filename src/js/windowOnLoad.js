export const openingPage = () =>{
    const welcomeText = document.querySelector('.weather-text-hidden');
    welcomeText.classList.remove('weather-text-hidden');
    welcomeText.classList.add('weather-text-visible');
}