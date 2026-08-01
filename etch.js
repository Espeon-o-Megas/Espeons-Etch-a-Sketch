const drawingPad = document.querySelector('.drawPad');
let gridSize=32;
updateGridSizeDisplay();
padFill ();

function updateGridSizeDisplay () {
 const midB = document.querySelector('#currentGridSize');
 midB.textContent=(gridSize +' X '+ gridSize);
}

function padFill (){
 let padWidth = drawingPad.offsetWidth-40
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
if (gridSize<=60){
 gridSize +=4;
} else {
 gridSize = 64;
}
updateGridSizeDisplay();
padFill();
})

let leftButton = document.querySelector('.minus');
leftButton.addEventListener('click', ()=>{
padClear();
if (gridSize>=12){
 gridSize -=4;
} else {
 gridSize = 8;
}
updateGridSizeDisplay();
padFill();
})