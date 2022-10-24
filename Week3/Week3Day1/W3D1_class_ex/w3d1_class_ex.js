//Exercise 1
//1.1
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
//1.2
console.log(document.body.children[1]);
console.log(document.body.firstElementChild.nextElementSibling);
//1.3
console.log(document.body.lastElementChild.previousElementSibling.lastElementChild);
console.log(document.body.children[1].children[1]);

//Exercise from slack
const users = ["John", "Lola", "Tom"];
let container = document.getElementById("container");
for(let item of users){
    let user = document.createElement("p");
    user.textContent = item;
    user.classList.add('user');
    container.appendChild(user);
}

