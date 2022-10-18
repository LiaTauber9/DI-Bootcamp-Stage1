"use strict";
const prompt=require("prompt-sync")({sigint:true}); 
// exercise 1
let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(" "));
//exercise 2
let str1 = "mix";
let str2 = "top";
let new_str1 = str2.slice(0,2).concat("", str1.slice(2))
let new_str2 = str1.slice(0,2).concat("", str2.slice(2))
console.log(new_str1);
console.log(new_str2);
//exercise 3
let operator = prompt("Enter operator: '+' or '-' or '/' or '*'")
let num1 = prompt("Enter first number: ")*1;
let num2 = prompt("Enter second number: ")*1;
let result;
switch(operator) {
    case '+':
        result = num1+num2
      break;
      case '-':
        result = num1-num2
      break;
      case '*':
        result = num1*num2
      break;
      case '/':
        result = num1/num2
      break;
    
    default:
        result = "operation is not valid"
  } 
  if (isNaN(result)){
    console.log("Error, only numbers excepted")
  }else{
    console.log("the result is: ", result);
  }
