//Exercise 4
let radius = document.getElementById('radius');
let volume = document.getElementById('volume');
document.getElementById('submit').addEventListener('click', calcSphare)
//r_3*3.14*4/3
function calcSphare(event){
    event.preventDefault()
    volume.value = radius.value**3*3.14/4
}
//Exercise 5
let events = {
    'click': click,
    'mouseover': mouseover,
    'mouseout': mouseout,
    'dblclick': dblclick  
}
function click(){
    event.target.style.color = "red"
}

function mouseover(){
    document.body.style.background = "yellow"
}

function mouseout(){
    document.body.style.background = "white"
}

function dblclick(event){
    alert("hey")  
}

for(ev in events){
    radius.addEventListener(ev, events[ev]);
    console.log(ev, " and ", events[ev]);
}
