// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the parameter is a string, the promise resolves with that same string uppercased.
// If the parameter is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")

let goodGrades = true;

let endSemester = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (goodGrades) {
            resolve("I will get a gift");
        } else {
            reject("I won't get the gift");
        }
    }, 5000)
   
});

function creatPromise(age){ 
    let promise = new Promise(function(resolve, reject) { 
        setTimeout(() => {
            if(age>=18){
                resolve('you alowed')
            }else{
                reject(new Error('you are younger then 18'))
            }
        }, 5000) 
    }) 
    return promise;  
}
creatPromise(20).then((res) => console.log(res)).catch((err) => console.log(err));
creatPromise(17).then((res) => console.log(res)).catch((err) => console.log(err));




