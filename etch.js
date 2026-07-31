let gamebox =document.querySelector('.gamebox');

let drawingPad = document.createElement('div');
drawingPad.classList.add('drawPad');
gamebox.appendChild(drawingPad);

let gridSize=16;
let width = Math.floor(700/gridSize);
console.log(width);
fillPad();

function fillPad () {
 for (let i=0; i<gridSize*gridSize; i++) {
  let tile = document.createElement('div');
  tile.classList.add('tile');
  tile.style.width=(width+'px');
  tile.style.height=(width+'px');
  drawingPad.appendChild(tile);
 }
}
