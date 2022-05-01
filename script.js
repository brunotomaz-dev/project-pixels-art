const pixelBoard = document.getElementById('pixel-board');
const firstColor = document.getElementById('palette1');
const secondColor = document.getElementById('palette2');
const thirdColor = document.getElementById('palette3');
const lastColor = document.getElementById('palette4');

// Funcção para criar linhas e colunas primeiro for para linhas e segundo para colunas.
function createBoard(lines) {
  for (let i = 0; i < lines; i += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLines';
    pixelBoard.appendChild(pixelLine);

    for (let index = 0; index < lines; index += 1) {
      const pixelCol = document.createElement('div');
      pixelCol.className = 'pixel';
      pixelLine.appendChild(pixelCol);
    }
  }
}

createBoard(5);

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
  // event.target.style.backgroundColor = bgColor; - troca só para evitar erro esLint
  const evTarget = event.target;
  evTarget.style.backgroundColor = bgColor;
}

// insere eventListener na class pixel
function listenerColor() {
  document.querySelectorAll('.pixel').forEach((item) => {
    item.addEventListener('click', changeColor);
  });
}
listenerColor();

// cria botão com id clear-board
const clear = document.createElement('button');
clear.id = 'clear-board';
clear.innerText = 'Limpar';
document.getElementById('principal').insertBefore(clear, pixelBoard);

// função para limpar pixel por pixel
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

// eventListener para o botão
function listenerClear() {
  document.querySelector('#clear-board').addEventListener('click', clearBoard);
}
listenerClear();

// função auxiliar para zerar pixels
function clearPixels() {
  while (pixelBoard.hasChildNodes()) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

// essa função depois de verificar se input possue valor passa a remover os pixels para depois adicionar conforme inserido no input
function altSize() {
  const boardSize = document.getElementById('board-size').value;
  if (boardSize === '') {
    alert('Board inválido!');
  } else if (boardSize > 50) {
    clearPixels();
    createBoard(50);
  } else if (boardSize < 5) {
    clearPixels();
    createBoard(5);
  } else {
    clearPixels();
    createBoard(boardSize);
  }
  listenerColor();
  listenerClear();
}

document.querySelector('#generate-board').addEventListener('click', altSize);

// consulta feita em https://javascript.plainenglish.io/build-a-random-color-generator-with-javascript-31061a6b99ae
function mixColor() {
  const colorRandom = Math.floor(Math.random() * 16777215).toString(16);
  return colorRandom;
}

secondColor.style.backgroundColor = `#${mixColor()}`;
thirdColor.style.backgroundColor = `#${mixColor()}`;
lastColor.style.backgroundColor = `#${mixColor()}`;
