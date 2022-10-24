//Exercise 1
//1.2
console.log(document.getElementById("container"));
document.body.children[1].lastElementChild.textContent = "Richard";
let ulArr = document.getElementsByClassName('list');
for(elem of ulArr){
    elem.children[0].textContent = 'Liah'
}
let liArr = document.getElementsByTagName("li");
for(let li of liArr){
    if(li.textContent === 'Sarah'){
      li.remove(); 
    }
}
//bonus
document.body.children[1].firstElementChild.textContent = "Jhon";
document.body.children[1].lastElementChild.textContent = "Pete";
 //get back original text content
 
for(let elem of ulArr){
    elem.classList.add('student_list');
}
ulArr[0].classList.add('university', 'attendance');
console.log(ulArr[0]);
//Exercise 2
let usersDiv = document.getElementById("container");
usersDiv.setAttribute("style", "background-color: lightblue; padding: 16px;");
let jhon = usersDiv.nextElementSibling.firstElementChild;
jhon.setAttribute("style", "display: none;");
let pete = jhon.nextElementSibling;
pete.setAttribute("style", "border: 3px solid;")
document.body.setAttribute("style", "font-size: 20px;")
if(usersDiv.style.backgroundColor === 'lightblue'){
    alert(`Hello ${jhon.textContent}, Hello ${pete.textContent}`)
}


//Exercise 3
//Exercise 4


