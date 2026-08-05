const pad = document.querySelector('.drawPad');
const grids = [8, 16, 32, 64];
let gridpicker = 0;
let gridSize=grids[gridpicker];
let tool = '';
let color ='';

window.onload = () => {
 updateGridSizeDisplay();
 padFill ();}

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
  if (event.buttons===1 && event.target.touched === false){
   event.target.touched = true;
   event.target.style['background-color']=color;
   if (event.target.opacity<0){event.target.opacity=0};
   if (event.target.opacity>1) {event.target.opacity =1};
   switch (tool) {
    case 'pen':
     event.target.opacity = 1;
    break;
    case 'pencil':
     event.target.opacity +=0.34;
    break;
    case 'eraser':
     event.target.opacity = 0;
    break;
   }
   event.target.style.opacity = event.target.opacity;
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

let toolbox = document.querySelector('.toolbox');
toolbox.addEventListener('click', (event)=>{
 let tools = document.querySelectorAll('.tool');
 tools.forEach((object)=>{
  if (object===event.target){
   tool = object.id
   object.style['border-color']='#15616d'
  } else if (object!== event.target){
   object.style['border-color']='#ff7d00'
  }
 })
})

let colorbox = document.querySelector('.colorbox');
colorbox.addEventListener('click', (event)=>{
 let colors = document.querySelectorAll('.color');
 colors.forEach((object)=>{
  switch (object.id){
   case 'lightB': object.color='#15616d';break;
   case 'darkB': object.color='#001524';break;
   case 'orange': object.color='#ff7d00';break;
   case 'brown': object.color='#78290f';break;
  }
 })

 colors.forEach((object)=>{
  if (object===event.target){
   color = object.color;
   object.style['outline-color']='#15616d'
  } else if (object!== event.target){
   object.style['outline-color']='transparent'
  }
 })
})