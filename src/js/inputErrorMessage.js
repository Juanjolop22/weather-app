export const errorMessage = (container, input) =>{
    const existingErrorMessage = document.querySelector('.errorText');
    if (existingErrorMessage) return
        
     input.classList.add('input-error');
     container.classList.add('input-container2')
     const errorMessage = document.createElement('p');
     errorMessage.classList.add('errorText');
     errorMessage.innerHTML = 'Por favor, ingresa una ubicación valida.';
     container.appendChild(errorMessage);
}

export const removeErrorMessage = (container, input) =>{
    input.classList.remove('input-error');
    container.classList.remove('input-container2');
    const errorMessage = document.querySelector('.errorText');
    if(errorMessage){
        errorMessage.remove();
    }
}