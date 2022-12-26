const sizeInput = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

sizeInput.addEventListener('input', textSizeChanger)

function textSizeChanger(){
    spanText.style.fontSize = sizeInput.value + 'px'
}
