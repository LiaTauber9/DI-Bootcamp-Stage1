
//Exercise 1
const user1 = prompt("enter first user's bearth year: ");
const user2 = prompt("enter second user's bearth year: ");
//option 1
let halfAgeYear;
let older;
let younger;
if (user1 != user2) {
    if (user1 - user2 > 0) {
        halfAgeYear = user1 * 1 + (user1 - user2);
        younger = "first user";
        older = "second user"
    } else {
        halfAgeYear = user2 * 1 + (user2 - user1);
        younger = "second user";
        older = "first user";
    }
    console.log(`in ${halfAgeYear} the age of ${older} will be twice the age of ${younger}`);
} else {
    console.log("the users are same age.")
}
//option 2
if (user1 != user2) {
    let years = [user1, user2].sort((a, b) => b - a);
    console.log(`In ${years[0]*1 + (years[0] - years[1])} the younger one is exactly half the age of the older.`)
} else {
    console.log("Both users are the same age.")
}


//Exercise 2
let zip = prompt("Enter a number of five digits:");
//option 1
console.log((zip.length == 5 && !isNaN(zip) && zip.replaceAll(' ', '') == zip) ? "success" : "error");
//option 2
console.log(/^\d{5}$/.test(zip) ? "success" : "error");

//Exercise 3
let word = prompt("enter a word");
let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
}
//option 1
console.log(word.replace(/a|e|i|o|u/gi, ""));
//option 2
console.log(word.replace(/a|e|i|o|u/gi, function (matched) {
    return vowels[matched];
}));
