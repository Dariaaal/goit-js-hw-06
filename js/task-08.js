const form = document.querySelector('form.login-form');
const login = document.getElementsByName("name");
const password = document.getElementsByName("password");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const {elements:{email, password}} = event.currentTarget;
    if (email.value === '' || password.value === ''){
        return alert('Please fill in all the fields!');
    } 
    const userDetails = {Email: email.value, Password: password.value};
    console.log(userDetails);
    event.currentTarget.reset();
}
