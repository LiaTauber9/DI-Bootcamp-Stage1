// Exercise 1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(-1, 1, "Jason")
people.push("Liah");
console.log(people.indexOf("Mary"));
console.log(people);
let newPeople = people.slice(1);
console.log(newPeople);
console.log(people.indexOf("Foo")); // return -1 becouse there is no element in the array
const last = people[people.length-1];
console.log(last);
const last1 = people.pop(); //do the same but changes the original array
console.log(last1);
//Exercise 2
let colors = ["blue", "yellow", "purple", "red"];
let suffixes = ["st", "nd", "rd", "th"];
for(let i = 0; i < colors.length; i++){
    console.log(`My #${i+1} choice is ${colors[i]}`); //option 1
    console.log(`My ${i+1}${suffixes[i]} choice is ${colors[i]}`); //option 2
}
//Exercise 3
let num = prompt("Enter a number")
while(isNaN(num) || num < 10){
    num = prompt("Enter a number bigger then 9");
}
//Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
const renter = building.nameOfTenants[1].toString();
console.log()
console.log(building.nameOfTenants[1], ": ", building.numberOfRoomsAndRent["dan"][0], "rooms");
if(building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.dan[1] > building.numberOfRoomsAndRent.david[1]){
    building.numberOfRoomsAndRent.dan[1] =1200;
}
console.log("dan: ", building.numberOfRoomsAndRent.dan);
//Exercise 5
let family = {
    father: "dan",
    mother: "shir",
    older: "noam",
    younger: "mia"
}
for(i in family){
    console.log(i);
}
for(i in family){
    console.log(family[i]);
}
//Exercise 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
let sentence = [];
for(i in details){
   sentence.push(i);
    sentence.push(details[i]);
}
console.log(sentence.join(" "));
//Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secretGroup = [];
for(i of names){
    secretGroup.push(i.charAt(0));
}
console.log(secretGroup.sort().join(""));












