//exercise 1
5 >= 1 //true
0 === 1 //false
4 <= 1 //false
1 != 1 //false
"A" > "B" //false B is bigger on alphabetical order
"B" < "C" //true C is bigger on alphabetical order
"a" > "A" // false -- output: true lowercase are bigger than uppercase
"b" < "A" //false
true === false //false
true != true //false

//exercise 2
let numbers = prompt("enter numbers separated by commas")
let arr = numbers.split(",")
let sum = 0;
arr.forEach(num => sum += num*1)
console.log(sum);

//exercise 3
let sentence = prompt("enter a sentence containing the word “Nemo”").toLowerCase().split(" ");;
let index = sentence.indexOf("nemo")
if(index === -1){
    console.log("I didn't found 'Nemo' in your sentence ")
}else{
    console.log("I found 'Nemo' at ", index)
}

//exercise 4
let num = prompt("enter a number: ")*1;
let output = "boom";
if(num > 2){
    output = o(num)
    if(num%5 === 0){
        output = output.toUpperCase();
    }
    if(num%2 === 0){
        output += "!"
    }
}
console.log(output);
function o(num){
    let o = ""
    for (i = 0; i < num; i++){
        o+="o"
    } 
    return 'B'+o+'m';
}