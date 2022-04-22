const pixelBoard = document.getElementById('pixel-board');
const firstColor = document.getElementById('palette1');
const secondColor = document.getElementById('palette2');
const thirdColor = document.getElementById('palette3');
const lastColor = document.getElementById('palette4');
let pixelCreate;
// Criar loop para fazer 25 quadrados, usando create element e depois inserir classe pixel e usar apend child para colocar  em pixel board.

for (let i = 0; i < 25; i += 1) {
  pixelCreate = document.createElement('div');
  pixelCreate.className = 'pixel';
  pixelBoard.appendChild(pixelCreate);
}

function selectColor(event) {
  firstColor.classList.remove('selected');
  secondColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  lastColor.classList.remove('selected');
  event.target.classList.add('selected');
}

document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', selectColor);
});
