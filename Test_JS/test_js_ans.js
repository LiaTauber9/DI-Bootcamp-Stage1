//Basics
//1
const nums = [3, 7, 10];
let ans = nums[1];
//2
const arrNums = [1, 2, 3, 4, 5];
ans = arrNums.splice(2, 0); // [] bacous 0 items removed at index 2 and this function returns the deleted elements
//3
const bestNumbers = [1, 2, 3]
const secondBestNumbers = [7, 8, 9]

const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
console.log(favoriteNumbers)// [4,5,6,1,2,3,7,8,9]
//4
// const football = {
//     type: "sport",
//     clubs: {
//       france : "Paris Saint-Germain",
//       spain : "Atlético Madrid",
//     }
//   }  

//   football.clubs.spain = "Real Madrid";
//   console.log(football.clubs.spain); // "Real Madrid"
//5
const myteam = "bestTeam";

// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// football.clubs[myteam] = "France national football team";
// console.log(football.clubs);
//     {
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//     bestTeam : "France national football team"
//   }
//6
const x = function (a, b) {
    return a * b;
}// we can define it and invoke when we call x
console.log(x(3, 4)) // 12
//7
//  function x() {
// 	a = 5;
//  }
// if there is a global variable 'a' outside the function - the value will be set to 5, if not = a global variable 'a' is now declared and it's global

//Functions
//8
function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
greeting(sayHello, "JavaScript!");// "Hello, JavaScript!"
//we can pass functions as arguments to other functions, the value is what the function return
//9
const sum = (num1, num2) => num1 + num2;

sum(40, 2)
sum(42, 0)
console.log("the answer to everything is", sum(42, 0))
//10
function foo() {
    function bar() {
        return "Poppin' bottles";
    }
    return bar();
}

console.log(foo());//foo return the value of bar so it return "Poppin' bottles"

//DOM
//11
// addEventListener('click', my_function);
//12 - yes
//13
const btn = document.createElement('button');
btn.textContent = "click me"
document.body.appendChild(btn)
btn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = "New Paragraph"
    document.body.appendChild(p)
    p.addEventListener('mouseover', (e) => {
        e.target.style.color = 'red'
    })
});
//14
const marks = [67, 60, 89, 90, 67, 42];
let sumMarks = 0;
for (let i = 0; i < marks.length; i++) {
    sumMarks += marks[i]
}
console.log(sumMarks);
sumMarks = 0;
for (let i of marks) {
    sumMarks += i;
}
console.log(sumMarks);
//15
const passed = marks.every(function (m) {
    return m >= 50;
}); // false becous not every element is passing the test: m >= 50
//16
const nums1 = [10, 50, 88];

const bignums = nums1.filter(function (n) {
    return n > 10;
});

console.log(bignums); // [50, 88]
//17
let input = [1, 2, 3, 4, 5];
const newInput = input.map(num => num ** 2)
console.log(newInput) // [ 1, 4, 9, 16, 25]
//18
const secondInput = [1, -4, 12, 0, -3, 29, -150];
const total = secondInput.filter(num => num >= 0).reduce((total, num) => total + num)
console.log(total) //42
//19
const input1 = 'George Raymond Richard Martin';
const initials = input1.split(" ").map(elem => elem[0]).join("");
//code 
console.log(initials)//'GRRM'
//Object and Classes
//20
function changeTshirt(myshirt) {
    console.log("myshirt", myshirt);
    myshirt.color = "red" //change the object tshirt in the function and allso in the global variable
    console.log("myshirt", myshirt); //this is the parameter
    console.log("tshirt", tshirt);   //this is the global variable
    // it will console the same object becouse when we pass an object as a argument it reference to the global variable and all the changes afect the global variabl()
}

const tshirt = {
    color: "blue",
    price: 10
}

changeTshirt(tshirt)
//21
function changeTshirt(myshirt) {
    let myshirt1 = {};
    let myShirtArr = Object.keys(myshirt)
    for (key of myShirtArr) {
        myshirt1[key] = myshirt[key]
    }

    console.log("myshirt", myshirt1);
    myshirt1.color = "red"
    console.log("myshirt1", myshirt1); //this is the parameter
    console.log("tshirt", tshirt);   //this is the global variable
}
//22
const football = {
    type: "sport",
    clubs: {
        france: "Paris Saint-Germain",
        spain: "Atlético Madrid",
    }
}
const { france: franceTeam, spain: spainTeam } = football.clubs
//23 
function retrieveSports(franceTeam, spainTeam) {
    const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
    console.log(sentence);
}
//24
class Item {
    constructor(nameProduct, priceProduct) {
        this.name = nameProduct;
        this.price = priceProduct;
    }

    displayInfo() {
        console.log(this.name + " is for $ " + this.price)
    }
}

const cake = new Item("Chocolate Cake", 10);
cake.displayInfo();// "Chocolate Cake is for $ 10"

//Promises
//25
Promise.resolve('Success!')
    .then(data => {
        return data.toUpperCase()
    })
    .then(data => {
        console.log(data)
    })
// output is: console.log('SUCCESS!') becous the first 'then' get the result 'Success!', convert the result to uppercase and return a new promis with the result 'SUCCESS!', the second 'then' get this result and print it to the console and return a new promis with no value at the result
//26
const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("OK");
    }, 2000);
});

p.then().then(function (data) {
    console.log(data);
}); //after 2 sec "OK" printed to the console
//27
async function test() {
    let result = 'first!';
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });

    result = await promise;

    console.log(result);
}

test();// 'done!' becouse of the 'await' - the function is waiting for the result of the promise, the result ('done!) asaigned as the value of result and printed to the console
//28
// Use async await, and fetch a fact on cats and display it. Use this third party API : https://catfact.ninja/fact

// In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM
// In the JS file, create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
// Make sure to use try and catch

function getFact() {
    const promis = async function () {
        return await fetch('https://catfact.ninja/fact').then(res => res.json())
    }
    promis().then(res => printFact(res.fact)).catch(() => printFact("oooops, couldn't find result"))
}

function printFact(fact) {
    const factDiv = document.createElement('div');
    factDiv.textContent = fact;
    document.body.appendChild(factDiv);
}
factBtn = document.createElement('button');
factBtn.textContent = 'Fact about Cat';
factBtn.addEventListener('click', getFact);
document.body.appendChild(factBtn);

// BONUS
class Book{
    constructor(title, author, date, pages, timesRead){
        this.title = title,
        this.author = author,
        this.creationDate = date,
        this.pagesNumber = pages,
        this.timesRead = timesRead
    }
    read(times) {
        return this.timesRead += times*1
    }    
}

class Manual extends Book{
    constructor(title, author, date, pages, timesRead){
        super(title, author, date, pages, timesRead)
    }
    isThrown(){
        const currentYear = new Date().getFullYear(); 
        this.thrown = currentYear - this.creationDate > 5 ? true : false
        return this.timesRead ? 'yes' : 'no'
    }    
}
class Novel extends Book{
    constructor(title, author, date, pages, timesRead){
        super(title, author, date, pages, timesRead)
    }
    isThrown(){
        this.thrown = this.timesRead > 100 ? true : false
        return this.timesRead ? 'yes' : 'no'
    }    
}
const Book1 = new Novel('Top Secret Shuttle Building Manual', 'Redacted', '2013-01-01', 1147, 1);
const Book2 = new Manual('Pride and Prejudice', 'Jane Austen', '1813-01-01', 432, 32);
console.log(`Is the book ${Book1.title} should be thrown? ${Book1.isThrown()}`)
console.log(`Is the book ${Book2.title} should be thrown? ${Book2.isThrown()}`)
console.log(Book1.read(5));zaqq
