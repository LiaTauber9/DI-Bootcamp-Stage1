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


// Fetch
// Exercise
// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page.
// Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// use this api : https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR" (edited) 


