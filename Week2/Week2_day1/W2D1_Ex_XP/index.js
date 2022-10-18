// exercise 1
let food = 'salad';
let meal = 'breackfast';
console.log('I eat %s at every %s', food, meal);
// exercise 2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);
// exercise 3
let celsius = 3;
console.log('%s°C is %s°F', celsius, celsius/5*9+32)
// exercise 4
let c;
let a = 34;
let b = 21;

console.log(a+b) 
// Prediction:55 because a and b are integers
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23 because a changed to 2
// Actual:23

//c is undefined

console.log(3 + 4 + '5'); //75 because 3 and 4 are integers and  the sum is 2+3 = 7, then 5 added as string

// exercise 5
console.log(typeof(15))
// Prediction:number
// Actual:number

console.log(typeof(5.5))
// Prediction:number
// Actual:number

console.log(typeof(NaN))
// Prediction:number
// Actual:number

console.log(typeof("hello"))
// Prediction: String
// Actual:

console.log(typeof(true))
// Prediction:boolean
// Actual:boolean

console.log(typeof(1 != 2))
// Prediction: boolean
// Actual: boolian

console.log("hamburger" + "s")
// Prediction: "hamburgers"
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction:NaN
// Actual:NaN

console.log("1" + "3")
// Prediction:"13"
// Actual:13

console.log("1" - "3")
// Prediction: NaN
// Actual: -2

console.log("johnny" + 5)
// Prediction: "johnny5"
// Actual:johnny5

console.log("johnny" - 5)
// Prediction: NaN
// Actual:NaN

console.log(99 * "hello")
// Prediction: NaN
// Actual:NaN

console.log(1 != 1)
// Prediction: false
// Actual:false

console.log(1 == "1")
// Prediction: true
// Actual:true

console.log(1 === "1")
// Prediction: false
// Actual:false

//exercise 6
console.log(
    5 + "34",'\n',
// Prediction:
// Actual:

5 - "4",'\n',
// Prediction:
// Actual:

10 % 5,'\n',
// Prediction:
// Actual:

5 % 10,'\n',
// Prediction:
// Actual:

"Java" + "Script",'\n',
// Prediction:
// Actual:

" " + " ",'\n',
// Prediction:
// Actual:

" " + 0,'\n',
// Prediction:
// Actual:

true + true,'\n',
// Prediction:
// Actual:

true + false,'\n',
// Prediction:
// Actual:

false + true,'\n',
// Prediction:
// Actual:

false - true,'\n',
// Prediction:
// Actual:

!true,'\n',
// Prediction:
// Actual:

3 - 4,'\n',
// Prediction:
// Actual:

"Bob" - "bill"
// Prediction:
// Actual:
)