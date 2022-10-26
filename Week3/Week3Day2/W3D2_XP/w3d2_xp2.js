//Exercise 2.1
const form = document.getElementsByTagName('form')[0];
console.log(form);
//2.2
let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
console.log(fName);
console.log(lName);
//2.3
fName = document.getElementsByName('fname')[0];
lName = document.getElementsByName('lname')[0];
console.log(fName);
console.log(lName);
//2.4
document.getElementById('submit').addEventListener
('click', function(event){
    if(fName.value.length < 1 || lName.value.length < 1){
        alert('Details are missing');
        event.preventDefault();    
    }else{
        event.preventDefault(); 
        createLi()
    }   
})
function createLi(fn,ln){
    let ul = document.getElementsByClassName('usersAnswer')[0];
    let li = document.createElement('li');
    li.textContent = `first name: ${fName.value}`;
    ul.appendChild(li);
    let li2 = document.createElement('li');
    li2.textContent = `last name: ${lName.value}`;
    ul.appendChild(li2);
}
//Exercise 3
//3.1
let allBoldItems;
//3.2
function getBold_items(){
    allBoldItems = document.getElementsByTagName('strong');
}
//3.3
function highlight(event){
    event.target.style.color = 'blue'
}
//3.4
function return_normal(event){
    console.log('return normal');
    // event.target.style.color = 'black'
    event.target.removeAttribute('style')
}
//3.5
getBold_items();
for(bold of allBoldItems){
    bold.addEventListener('mouseout', return_normal);
    bold.addEventListener('mouseover', highlight);
}


