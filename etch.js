/*
I need to make a change so that:
-The drawing pad is flexible.
-The number of tiles changes depending on the pads shape and size.
My idea:
-grid size is number of horizontal tiles.
-the size of these tiles is grid-width/grid-size
-since they are square, the number of tile rows is grid-height/tile-size
-the total number of squares needed is the horizontal amount times the vertical, 
 which is: 
*/

let gamebox =document.querySelector('.gamebox');

let drawingPad = document.querySelector('.drawPad');

let tilesPerRow=25;
let tileSize= Math.floor((drawingPad.offsetWidth-20)/tilesPerRow);
console.log(tileSize);
let tileRows= Math.floor((drawingPad.offsetHeight-20)/tileSize);
console.log(tileRows);
fillPad();

function fillPad () {
 for (let i=0; i<tilesPerRow*tileRows; i++) {
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
  drawingPad.appendChild(tile);
 }
}
