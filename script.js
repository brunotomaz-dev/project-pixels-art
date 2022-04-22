const pixelBoard = document.getElementById('pixel-board');
const firstColor = document.getElementById('palette1');
const secondColor = document.getElementById('palette2');
const thirdColor = document.getElementById('palette3');
const lastColor = document.getElementById('palette4');
let pixelCreate;
const selectedColor = document.querySelector('.selected');

// Cria 25 divs com class pixel
for (let i = 0; i < 25; i += 1) {
  pixelCreate = document.createElement('div');
  pixelCreate.className = 'pixel';
  pixelBoard.appendChild(pixelCreate);
}

// função para selecionar cor
function selectColor(event) {
  firstColor.classList.remove('selected');
  secondColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  lastColor.classList.remove('selected');
  event.target.classList.add('selected');
}

// insere eventListener em toda class color
document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', selectColor);
});

// função para trocar cor (ainda não funciona)
function changeColor(event) {
  const cssObj = window.getComputedStyle(selectedColor, null);
  const bgColor = cssObj.getPropertyValue('background-color');
  event.target.classList.add('pixelColor');
  document.querySelectorAll('.pixelColor').style.backgroundColor = bgColor;
}

document.querySelectorAll('.pixel').forEach(item => {
  item.addEventListener('click', changeColor);
});
