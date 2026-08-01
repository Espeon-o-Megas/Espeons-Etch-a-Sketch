const drawingPad = document.querySelector('.drawPad');
let gridSize=30;
updateGridSizeDisplay();
padFill ();

function updateGridSizeDisplay () {
 const midB = document.querySelector('#currentGridSize');
 midB.textContent=gridSize;
}

function padFill (){
 let padWidth = drawingPad.offsetWidth-20
 let tileSize = Math.floor(padWidth/gridSize);
 drawingPad.style.height=(padWidth+'px');
 for (let i=0; i<gridSize*gridSize; i++) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.style.width=(tileSize+'px');
  tile.style.height=(tileSize+'px');

  tile.addEventListener('mousemove',(event)=>{
   if (event.buttons===1 && event.ctrlKey===false){
    event.target.classList.add('coloredTile');
   } else if (event.buttons===1 && event.ctrlKey===true){
    event.target.classList.remove('coloredTile');
   }
  })
  tile.addEventListener('touchmove',(event)=>{
    event.target.classList.add('coloredTile');
  })
  drawingPad.appendChild(tile);
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
if (gridSize<=62){
 gridSize +=2;
} else {
 gridSize = 64;
}
updateGridSizeDisplay();
padFill();
})

let leftButton = document.querySelector('.minus');
leftButton.addEventListener('click', ()=>{
padClear();
if (gridSize>=10){
 gridSize -=2;
} else {
 gridSize = 8;
}
updateGridSizeDisplay();
padFill();
})



/* const gamebox =document.querySelector('.gamebox');
const drawingPad = document.querySelector('.drawPad');
const displayB = document.querySelector('#currentTilesPerRow')
let tilesPerRow=45;
displayB.textContent=tilesPerRow;
fillPad();

function fillPad () {
 let tileSize= Math.floor(((drawingPad.offsetWidth-20)/tilesPerRow)-2);
 let tileRows= Math.floor(((drawingPad.offsetHeight-20)/tileSize)-2);
 
 for (let i=0; i<tileRows; i++) {
 for (let j=0; j<tilesPerRow; j++){
  let tile = document.createElement('div');
  tile.classList.add('tile');
  tile.style.width=(tileSize+'px');
  tile.style.height=(tileSize+'px');
  tile.addEventListener('mousemove',(event)=>{
   if (event.buttons===1 && event.ctrlKey===false){
    event.target.classList.add('coloredTile');
   } else if (event.buttons===1 && event.ctrlKey===true){
    event.target.classList.remove('coloredTile');
   }
  })
  tile.addEventListener('touchmove',(event)=>{
    event.target.classList.add('coloredTile');
  })
  drawingPad.appendChild(tile);
 }}
}

function clearPad() {
 let tileSize= Math.floor(((drawingPad.offsetWidth-20)/tilesPerRow)-2);
 let tileRows= Math.floor(((drawingPad.offsetHeight-20)/tileSize)-2);
 for (let i=0; i<tileRows; i++) {
 for (let j=0; j<tilesPerRow; j++){
  drawingPad.removeChild(drawingPad.firstChild);
 }}
}

let lb = document.querySelector('#reduceGridSize')
lb.addEventListener('click', ()=>{
 clearPad();
 tilesPerRow=tilesPerRow-5;
 fillPad();
})  drawingPad.removeChild(drawingPad.firstChild); */