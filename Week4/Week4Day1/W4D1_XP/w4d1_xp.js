// Exercise 1 : Scope
//1.1
//#1.1
'inside the funcOne function 3'
//#1.2
// reasighn gives an error
//#2.1
`inside the funcThree function 0`
`inside the funcThree function 5`



//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// run in the console:
q3()
q32()// "hello"

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}


// run in the console:
q4()//test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);//5
}
alert(a);//5 

// ex 2
const winBattle =()=>{
    return true
}
let experiencePoints = winBattle() ? 10 :1;

console.log(experiencePoints);

//ex 3
const isString =(str)=>{
    return typeof(str)===`string`? true: false;
}

//ex 4
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((element,i) => {

    console.log(`${++i}# choice is ${element}`);
});

const Violet =  colors.some((V)=> {return  true})
Violet?  console.log("Yeah"):console.log("No...")

//ex 5 
// help??
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
color.forEach((element,i) => {
    let x;

});

//ex 6

let bankAmount =1000000000;
const vat=17;
let details = ["+200", "-100", "+146", "+167", "-2900"];

details.forEach((element,i) => {
   details[i] = element*vat; 
   bankAmount+= details[i];
});

console.log(bankAmount);
