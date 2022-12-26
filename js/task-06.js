const numberInput = document.querySelector('#validation-input');

numberInput.addEventListener('blur', validation);

function validation(event){
    if(event.currentTarget.value.length === Number(numberInput.dataset.length)){
        numberInput.classList.remove('invalid');
        numberInput.classList.add('valid');
    } else if (event.currentTarget.value.length !== Number(numberInput.dataset.length)){
        numberInput.classList.remove('valid');
        numberInput.classList.add('invalid');
    }
}

