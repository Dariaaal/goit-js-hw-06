const counter = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", removeValueFuction)
incrementBtn.addEventListener("click", addValueFunction)

function removeValueFuction(){
    counterValue -= 1;
    counter.textContent = counterValue;
}

function addValueFunction(){
    counterValue += 1;
    counter.textContent = counterValue;
}

