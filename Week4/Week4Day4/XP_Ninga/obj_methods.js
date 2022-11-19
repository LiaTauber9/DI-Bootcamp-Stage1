// Exercise 1 : Print Full Name
// Instructions
// Create a function called printFullName(studentObj) that accepts an object as a parameter.
// For example : printFullName({first: 'Elie', last:'Schoppik'}).
// The function should return a string like the example below
function printFullName({first, last}){
    return `Your full name is ${first} ${last}`
}

console.log(printFullName({first: 'Elie', last:'Schoppik'})); 
// // 'Your full name is Elie Schoppik`
// Destructure this object DIRECTLY from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)

// The output of the printFullName() function should be the exact same as the displayStudentInfo function. (Exercise XP)



// Exercise 2 : Keys And Values
// Instructions
// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples
keysAndValues({ a: 1, b: 2, c: 3 });
// ➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined });
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
function keysAndValues(obj){
    const kiesArr = Object.keys(obj).sort();
    const valuesArr = kiesArr.map(key => obj[key])
    console.log([kiesArr, valuesArr]);
}

// Exercise 3 : Counter Class
// Instructions
// Analyze the code below, what will be the output?
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);// 3

//XP Ninja
// Exercise 1 : Bird Class
// Instructions
// Analyze the code below, what will be the output?
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();//"I'm pink. 🌸" // ("I'm a bird. 🦢"
