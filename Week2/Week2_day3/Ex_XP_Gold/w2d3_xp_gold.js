//Exercise 1
let numbers = [123, 8409, 100053, 333333333, 7];
numbers.forEach(num => console.log(num % 3 === 0));
//Exercise 2
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}
let n = prompt("Enter your name:");
if (guestList[n]) {
    console.log(`Hi! I'm ${n}, and I'm from ${guestList[n]}.`);
} else {
    console.log("Hi! I'm a guest.");
}
//Exercise 3
let age = [20, 5, 12, 43, 98, 55];
let sum = 0;
let highest = 0;
for (n of age) {
    sum += n;
    if (n > highest) {
        highest = n
    }
}
console.log("the sum is:", sum);
console.log("the highest number is:", highest);