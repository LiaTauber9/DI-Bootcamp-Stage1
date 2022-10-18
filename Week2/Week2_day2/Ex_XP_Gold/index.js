//Exercise 1
let language = prompt("Enter your language").toLowerCase();
switch(language){
    case "french": console.log("Bonjour"); break;
    case "english": console.log("Hello"); break;
    case "hebrew": console.log("Shalom"); break;
    default: console.log("01110011 01101111 01110010 01110010 01111001");
}
//Exercise 2
let grade =prompt("Enter your grade")*1;
switch(true){
    case grade > 89: console.log("A"); break;
    case grade > 79: console.log("B"); break;
    case grade > 69: console.log("C"); break;
    default: console.log("D");
}
//Exercise 3
let verb = prompt("Enter a verb");
if(verb.length < 3){
    console.log(verb)
}else if(verb.length > 3 && verb.endsWith("ing")){
    console.log(verb.concat("ly"))
}else{
    console.log(verb.concat("ing"))
}