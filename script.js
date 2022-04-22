const pixelBoard = document.getElementById('pixel-board');
let pixelCreate;
// Criar loop para fazer 25 quadrados, usando create element e depois inserir classe pixel e usar apend child para colocar  em pixel board.

for (let i = 0; i < 25; i += 1) {
  pixelCreate = document.createElement('div');
  pixelCreate.className = 'pixel';
  pixelBoard.appendChild(pixelCreate);
}
