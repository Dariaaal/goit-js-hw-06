const user = document.querySelector('form.login-form');
const login = document.getElementsByName("name");
const password = document.getElementsByName("password");

user.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const {elements:{login, password}} = event.currentTarget;
    if (login.value === "" || password.value === ""){
        console.log("Alert! Fill in all the fields");
    } 
    console.log(`Login: ${login.value}, Password: ${password.value}`)
    event.currentTarget.reset();
}
