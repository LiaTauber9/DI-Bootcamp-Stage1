//Exercise 1 : guess what will be console logged, and explain why
let text = "Hello";

function checkText (){
	console.log("In the function",text); //in the funtion Hello
	text += " World";
	console.log("Still in the function",text);//Still in the function Hello World
}

console.log("before the function", text); //before the function Hello 

checkText()

console.log("after the function", text);//after the function Hello World 
// Exercise 2 : guess what will be console logged, and explain why
let friend = "Harry";

function checkfriend (){
	let friend = "Alice";
	console.log("In the function",friend); //In the function Alice
	friend += " Smith";
	console.log("Still in the function",friend);//In the function Alice Smith
}

console.log("before the function", friend);//before the function Harry

checkfriend()

console.log("after the function", friend);// after the function Harry

// Exercise 1:

// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// then function expression,
// then arrow function
const name = prompt('enter your name: ');
let greet = function(name){
    alert(`Hello ${name}`)
}




// Exercise 2: Function & Arrow function & Ternary Operator

// Check if the user's age is higher than 18. Use ternary operator.
// if the user's age is higher than 18, return "You can drive"
// else, return "You cannot drive"
// Do this exercise,

// first by using function declarations
// then function expression,
// then arrow function
  
console.log(() => (prompt('whats your age')*1) > 18 ? 'you can drive' : 'you cannot drive'); 