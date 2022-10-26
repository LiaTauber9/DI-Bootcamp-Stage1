const h1 = document.querySelector('h1');
//1.1
console.log(h1);
//1.2
let article = document.getElementsByTagName('article')[0];
article.lastElementChild.remove();
//1.3
document.getElementsByTagName('h2')[0].addEventListener('click', function(event){event.target.style.backgroundColor = 'red'});
//1.4
document.getElementsByTagName('h3')[0].addEventListener('click', function(event){event.target.style.display = 'none'});
//1.5
const pArr = document.getElementsByTagName('p');
const btn = document.createElement('button');
btn.textContent = 'Click';
btn.addEventListener('click', function(){
    for(p of pArr){
        p.style.fontWeight = 'bold';
    }
})
document.body.appendChild(btn);
//bonus
h1.addEventListener('mouseover', function(event){
    const size = Math.floor(Math.random()*100);
    event.target.style.fontSize = `${size+1}px`
})
//bonus 2
pArr[1].addEventListener('mouseover', function(event){
    event.target.classList.toggle('fade');
})