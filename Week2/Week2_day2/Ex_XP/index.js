let x = 5;
let y = 2;
function isBigger(num1, num2) {
    if (num1 - num2 < 0) {
        return num2 + " is bigger"
    } else if (num1 - num2 > 0) {
        return num1 + " is bigger"
    } else {
        return "equal numbers"
    }
}
console.log(isBigger(4, 9));
console.log(isBigger(6, 8));
console.log(isBigger(-4, 2));
console.log(isBigger(2, -4));
console.log(isBigger(6, 6));

//Exercise 2
let newDog = "Chihuahua";
console.log(`there are ${newDog.length} letters`);
console.log(newDog.toUpperCase());
console.log(newDog.toLocaleLowerCase());
if (newDog == "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed")
} else {
    console.log("I dont care, I prefer cats")
}

//Exercise 3
// let number = prompt("Enter a number")*1;
// if(number %2 == 0){
//     console.log(`${number} is an even number`)
// }else{
//     console.log(`${number} is an odd number`)
// }

//Exercise 4 option a
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length == 1) {
    console.log(`<${users[0]}> is online`);
} else if (users.length > 2) {
    console.log(`<${users[0]}> and <${users[1]}> and ${users.length - 2} others are online`);
} else if (users.length == 2) {
    console.log(`<${users[0]}> and <${users[1]}> are online`);
} else {
    console.log("no one is online")
}
//Exercise 4 option b
let part1 = "no one";
let part2 = " is online";

if (users > 0) {
    if (users.length > 1) {
        part1 = `<${users[0]}> and <${users[1]}>`
        part2 = ` are online`
    } else {
        part1 = `<${users[0]}>`
    }
    if (users.length > 2) {
        part1 += ` and ${users.length - 2} others`
    }
}
console.log(part1, part2);
