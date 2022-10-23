//Exercise 1
function infoAboutMe(){
    console.log("my name is liah");
}
infoAboutMe();

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);    
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");
//Exercise 2
function calculateTip(){
    let bill = prompt("Enter the amount of the bill: ")*1;
    let tip = 0;
    if(bill < 50){
        tip = bill *0.2;
    }else if(bill > 200){
        tip = bill *0.1;
    }else{
        tip = bill*0.15;
    }
    return console.log(`tip is $${tip}. final bill is: $${tip+bill}`);
}

calculateTip()
//Exercise 3
function isDivisible(){
    let sum = 0;
    for(num in [...Array(500).keys()]){
        if(num % 23 === 0){
            sum += num*1;
            console.log(num);
        }
    }
    console.log("sum: ", sum);
}
//bonus
function isDivisible1(divisor){
    let sum = 0;
    for(num in [...Array(500).keys()]){
        if(num % divisor === 0){
            sum += num*1;
            console.log(num);
        }
    }
    console.log(`all the numbers divisible by ${divisor}, and their sum: ${sum}`);
}
isDivisible();
isDivisible1(15);
//Exercise 4
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList = ["banana", "orange", "apple"];
function myBill(){
    let bill = 0;
    shoppingList.forEach(function(item){
        if(stock[item]){
            bill += prices[item]*1;
            console.log(`${item} aded, bill is ${bill}`);
            stock[item]--;
            console.log(`stock of ${item} is ${stock[item]}`);
        }else{
            console.log(`There is no ${item} in stock`)
        }
    })
    return console.log(`toatal amount is: ${bill}`);
}
myBill();
//Exercise 5
function changeEnough(itemPrice, amountOfChange){
    const convert = [0.25, 0.10, 0.05, 0.01];
    let wallet = 0;
    for(let i = 0; i < 4; i++){
        wallet += amountOfChange[i]*convert[i];
    }
    return wallet > itemPrice;
} 
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));
//Exercise 6
// function hotelCost(){
//     let nights;
//     while(isNaN(nights)){
//         nights = prompt("How many nights in the hotel?")*1;
//     }
//     return nights * 140;
// }

// function planeRideCost(){
//     let destination = 0;
//     while(! isNaN(destination)){
//         destination = prompt("What's your destination?")*1;
//     }
//     switch(destination.toString().toLowerCase()){
//         case "london": return 183;
//         case "paris": return 220;
//         default: return 300
//     }
// }

// function rentalCarCost(){
//     let days;
//     while(isNaN(days)){
//         days = prompt("How many days do you want to rent the car?")*1;
//     }
//     if(days > 10){
//         return days * 38
//     }
//     return days * 40
// }

// function totalVacationCost(){
//     console.log(`The car cost: ${rentalCarCost()}, the hotel cost: $${hotelCost()}, the plane tickets cost: $${planeRideCost()}`);
// }


//Exercise 6 - bonus
function totalVacationCost(){
    let details = [];
    //check if destination (details[0]) is a string 
    //(when string in prompt multiply by 1 convert to a NaN)
    //check if day for renting car(details[1]) and nights in hotel (details[2]) are numbers 
    //(when number in prompt multiply by 1 it convert to a number)
    while(! isNaN(details[0])|| isNaN(details[1]) || isNaN(details[2])){
        details = prompt("Enter the details of your vacation seperated by commas:<br>destination,<br>number of nights in the hotel,<br>number of days to rent a car:").split(",").map(item => item*1);
    }
    console.log(`The plane tickets cost: ${planeRideCost(details[0])}, the hotel cost: $${hotelCost(details[1])}, the car cost: $${rentalCarCost(details[2])}`);
}

function planeRideCost(destination){
    switch(String(destination).toLowerCase()){
        case "london": return 183;
        case "paris": return 220;
        default: return 300
    }
}

function hotelCost(nights){
    return nights * 140;
}

function rentalCarCost(days){
    if(days > 10){
        return days * 38
    }
    return days * 40
}

totalVacationCost();



