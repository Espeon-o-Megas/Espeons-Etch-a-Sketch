const drawingPad = document.querySelector('.drawPad');
const grids = [8, 16, 32, 64];
let gridpicker = 0;
let gridSize=grids[gridpicker];

window.onload = () => {
 padFit();
 updateGridSizeDisplay();
 padFill ();
}

window.onresize = () => {
 padFit();
}

function updateGridSizeDisplay () {
 const midB = document.querySelector('#currentGridSize');
 midB.textContent=(gridSize +' X '+ gridSize);
}

function padFit () {
 if (window.innerHeight>=window.innerWidth){
  drawingPad.style.width=0.90*window.innerWidth+'px';
  drawingPad.style.height = drawingPad.style.width;
 } else {
  drawingPad.style.height=0.90*window.innerHeight+'px';
  drawingPad.style.width = drawingPad.style.height;
 }
 let tiles = document.querySelectorAll('.tile')
 let padWidth = drawingPad.offsetWidth-40
 let tileSize = Math.floor(padWidth/gridSize);
 tiles.forEach((tile)=>{ 
  tile.style.height = tileSize+'px';
  tile.style.width = tileSize+'px';
 }) 
}

function createTile (size) {
 const tile = document.createElement('div');
 tile.classList.add('tile');
 tile.style.width=(size+'px');
 tile.style.height=(size+'px');
 tile.addEventListener('mousemove',(event)=>{
  if (event.buttons===1 && event.ctrlKey===false){
   event.target.classList.add('coloredTile');
  } else if (event.buttons===1 && event.ctrlKey===true){
   event.target.classList.remove('coloredTile');
  }
 })
 tile.addEventListener('touchstart',(event)=>{
  event.target.classList.add('coloredTile');
 })
 return tile;
}

function padFill (){
 let padWidth = drawingPad.offsetWidth-40
 let tileSize = Math.floor(padWidth/gridSize);
 drawingPad.style.height=(padWidth+'px');
 for (let i=0; i<gridSize*gridSize; i++) {
  drawingPad.appendChild(createTile(tileSize));
 }
}

function padClear () {
 for (let i=0; i<gridSize*gridSize; i++){
  let tile = document.querySelector('.tile');
  drawingPad.removeChild(tile)
 }
}

let rightButton = document.querySelector('.plus');
rightButton.addEventListener('click', ()=>{
padClear();
if (gridpicker<3) {
 gridpicker++;
}
gridSize = grids[gridpicker];
updateGridSizeDisplay();
padFill();
})

let leftButton = document.querySelector('.minus');
leftButton.addEventListener('click', ()=>{
padClear();
if (gridpicker>0) {
 gridpicker--;
}
gridSize = grids[gridpicker];
updateGridSizeDisplay();
padFill();
})