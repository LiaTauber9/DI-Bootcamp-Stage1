// Exercise 1: exceptions
// Using the code below:
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}

console.log("after")
// Which type of error will be thrown ? Look on the different types errors on Google
// Is the console.log("after") will be shown on the console ?

// Exercise 2
// Write a function called checkEmail that takes one parameter: the email of the user.
// Your function should return "You are signed in". However, if the email doesn't contain @ you should throw the error, "Missing @ in the email." (edited) 
function checkEmail(mail){
    try{
        if(mail.includes('@')){
            console.log("You are signed in")
        }else{
            throw new Error("Missing @ in the email.")
        }    
    } catch(e) {
        console.log(e);
    }
}
checkEmail('ert')