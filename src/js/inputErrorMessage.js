export const errorMessage = (container, input) =>{
    input.classList.add('input-error');
    const errorMessage = document.createElement('p');
    errorMessage.innerHTML = 'Por favor, ingresa una ubicación valida.';
    container.appendChild(errorMessage);
}