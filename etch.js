const pad = document.querySelector('.drawPad');
const grids = [8, 16, 32, 64];
let gridpicker = 0;
let gridSize=grids[gridpicker];

window.onload = () => {
 updateGridSizeDisplay();
 padFill ();
 tileFilter();
}

function updateGridSizeDisplay () {
 const midB = document.querySelector('#currentGridSize');
 midB.textContent=(gridSize +' X '+ gridSize);
}

function createTile () {
 const tile = document.createElement('div');
 tile.classList.add('tile');
 tile.id = ('grid'+gridSize);
 tile.opacity = 0.0;
 tile.touched = false;

 tile.addEventListener('mousemove',(event)=>{
  if (event.buttons===1 && event.ctrlKey===false){
   if (event.target.opacity<0){event.target.opacity=0};
   if (event.target.touched === false){
    event.target.touched = true;
    event.target.opacity +=0.34;
    event.target.style.opacity = event.target.opacity;
   } 
  } else if (event.buttons===1 && event.ctrlKey===true){
   if (event.target.opacity>1) {event.target.opacity =1};
   if (event.target.touched === false){
   event.target.touched = true;
   event.target.opacity -=0.34;
   event.target.style.opacity = event.target.opacity;
   }
  }
 })
 tile.addEventListener('mouseleave', (event)=>{
  event.target.touched = false;
 })
 tile.addEventListener('mouseup', (event)=>{
  event.target.touched = false;
 })
 return tile;
}

function padFill () {
 for (let i=0; i<gridSize*gridSize; i++) {
  pad.appendChild(createTile());
 }
}

function padClear () {
 for (let i=0; i<gridSize*gridSize; i++){
  let tile = document.querySelector('.tile');
  pad.removeChild(tile)
 }
}

let buttonbox = document.querySelector('.buttonbox')
buttonbox.addEventListener('click', (event)=>{
 let RB = document.getElementById('rightButton');
 let LB = document.getElementById('leftButton');
 padClear();
 if(event.target===RB && gridpicker<3){
  gridpicker++;
 } else if (event.target===LB && gridpicker>0){
  gridpicker--;
 }
 gridSize = grids[gridpicker];
 let tiles = document.querySelectorAll('.tile')
 tiles.forEach((tile)=>{
  tile.id=('grid'+gridSize);
 })
 updateGridSizeDisplay();
 padFill();
})