const pixelBoard = document.getElementById('pixel-board');
const firstColor = document.getElementById('palette1');
const secondColor = document.getElementById('palette2');
const thirdColor = document.getElementById('palette3');
const lastColor = document.getElementById('palette4');
let pixelCreate;

// Cria 25 divs com class pixel
for (let i = 0; i < 25; i += 1) {
  pixelCreate = document.createElement('div');
  pixelCreate.className = 'pixel';
  pixelBoard.appendChild(pixelCreate);
}

// inicia com cor preta selecionada
firstColor.classList.add('selected');

// função para selecionar cor
function selectColor(event) {
  firstColor.classList.remove('selected');
  secondColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  lastColor.classList.remove('selected');
  event.target.classList.add('selected');
}

// insere eventListener em toda class color
document.querySelectorAll('.color').forEach((item) => {
  item.addEventListener('click', selectColor);
});

// função para trocar cor
function changeColor(event) {
  const selectedColor = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(selectedColor);
  const bgColor = cssObj.getPropertyValue('background-color');
  event.target.style.backgroundColor = bgColor;
}

// insere eventListener na class pixel
document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', changeColor);
});

// cria botão com id clear-board
const clear = document.createElement('button');
clear.id = 'clear-board';
clear.innerText = 'Limpar';
const colorPalette = document.querySelector('#color-palette');
document.body.insertBefore(clear, pixelBoard);

// função para limpar pixel por pixel
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

// eventListener para o botão
document.querySelector('#clear-board').addEventListener('click', clearBoard);
