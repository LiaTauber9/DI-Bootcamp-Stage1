//variabls for the page
let currentColor = 'white';
let allBoardArr = [];
let isMousDown = false;


//create left section
let colorsArr = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966','#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6',
'#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC','#66994D', ]

for(let i = 0; i < 21; i++){
    let colorBox = document.createElement('div');
    colorBox.id = colorsArr[i];
    colorBox.classList.add('colorBox');
    colorBox.style.background = colorsArr[i];
    document.getElementById('leftSection').appendChild(colorBox); 
    colorBox.addEventListener('click', chooseColor)
}
//clear button
const btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', clear)

//create right section
for(let i = 0; i < 2000; i++){
    let boardPart = document.createElement('div');
    boardPart.classList.add('boardPart');
    document.getElementById('rightSection').appendChild(boardPart);
    boardPart.addEventListener('click', paint)
    boardPart.addEventListener('mousedown', () => isMousDown = true)
    boardPart.addEventListener('mouseup', ()=> isMousDown = false)
    boardPart.addEventListener('mouseover', hoverinBrush)
    allBoardArr.push(boardPart)
}

//event listeners functions
function chooseColor(event){
    currentColor = event.target.id
    console.log("cuurent color - ", currentColor)
}

function paint(event){
    event.target.style.background = currentColor;
    console.log( "backgrond - " ,event.target.style.background, "current color", currentColor);
}

function clear(){
    currentColor = 'white';
    for(i of allBoardArr){
        i.style.background = currentColor
    }
}

function hoverinBrush(event){
    if(isMousDown){
        paint(event)
    }
}