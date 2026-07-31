let gamebox =document.querySelector('.gamebox');

let drawingPad = document.querySelector('.drawPad');

let tilesPerRow=30;
fillPad();

function fillPad () {
 let tileSize= Math.floor((drawingPad.offsetWidth-20)/tilesPerRow);
 console.log(tileSize);
 let tileRows= Math.floor((drawingPad.offsetHeight-20)/tileSize);
 console.log(tileRows);
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
  drawingPad.appendChild(tile);
 }}
}
