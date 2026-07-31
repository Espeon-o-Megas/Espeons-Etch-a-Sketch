let gamebox =document.querySelector('.gamebox');

let drawingPad = document.createElement('div');
drawingPad.classList.add('drawPad');
gamebox.appendChild(drawingPad);

let gridSize=30;
let width = Math.floor(700/gridSize);
console.log(width);
fillPad();

function fillPad () {
 for (let i=0; i<gridSize*gridSize; i++) {
  let tile = document.createElement('div');
  tile.classList.add('tile');
  tile.style.width=(width+'px');
  tile.style.height=(width+'px');
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
