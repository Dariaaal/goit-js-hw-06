const colorBtn = document.querySelector('button.change-color');
const spanTextColor = document.querySelector('span.color')

colorBtn.addEventListener('click', getRandomHexColor)

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  spanTextColor.textContent = color;
  document.body.style.backgroundColor = color;
}
