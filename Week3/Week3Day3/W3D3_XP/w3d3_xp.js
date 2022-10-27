// exercise 1 Timer
//1.1
function hellAlert(){
    alert("Hello World")
}
setTimeout(hellAlert, 2000);
//1.2 //1.4
let pCount = 0;
function addP(){
    if(pCount < 5){
        const p = document.createElement('p');
        p.textContent = 'Hello World'
        document.getElementById('container').appendChild(p)
        pCount++
        console.log(pCount);
    }else{
        clearInterval(interval)
    }
    
}
setTimeout(addP, 2000);
//1.3
const interval = setInterval(addP, 2000);
const btn = document.getElementById('clear');
btn.addEventListener('click', function(){
    clearInterval(interval)
})

//Exercise 2  Move The Box

//Exercise 2 Drag & Drop
const box = document.getElementById('box');
box.draggable = true;
box.addEventListener('dragstart', start)
function start(event){
    event.dataTransfer.setData("text/plain", event.target.id) 
}
