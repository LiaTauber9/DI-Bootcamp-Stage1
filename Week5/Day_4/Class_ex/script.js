// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject else - resolve with the name of the 2 ppl in an array
// The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun
// The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name
// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject (use the endWith string method) else resolve with the verb
// The last function, is an async function - it receives all the above promises, and return a sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"

// async function famousPeople(name1, name2){
//     const namesArr = [name1, name2]
//     if(namesArr.every(elem => typeof(elem) === 'string')){
//         return namesArr
//     } else{
//         throw new Error('not a string') 
//     }
// }

// async function noun(nounWord){
//     if(nounWord.length >=3){
//         return nounWord
//     } else{
//         throw new Error('word has less then 3 chars')  
//     }
// }

// async function city(cityWord){
//     if(/[A-Z]/.test(cityWord[0])){
//         return cityWord
//     } else{
//         throw new Error(`${cityWord} should start with uppercase`)  
//     }
// }

// async function verb(verbWord){
//     if(verbWord.endsWith('ing')){
//         return verbWord
//     } else{
//         throw new Error(`${verbWord} should end with 'ing'`)  
//     }
// }

// async function setSentance(){
//     const names = await famousPeople('Bibi', 'Lapid');
//     const noun = await noun('an apple');
//     const city = await city('raanana');
//     const verb = await verb('throwing');
//     return `${names[0]} is ${verb} ${noun} with ${names[1]} in ${city}.`
// }
// setSentance()
// .then(res => console.log(res)).catch(err => console.log(err));

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

//part 1
async function tag(){
    const prom = await fetch('http://random-word-api.herokuapp.com/word?number=1');
    if(prom.status === 200){
        const tag = await prom.json();
        return tag[0];
    } else{
        throw new Error('error in gif() no url')
    }
}

async function gif(tag){
    const prom = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    if(prom.status === 200){
        const url = await prom.json();
        return url.data.images.downsized_large.url;
    } else{
        throw new Error('error in gif() no url')
    }
}

function displayGif(url){
    const img =  document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
} 

async function setGif(){
    try{
        const tagWord = await  tag();
        const gifUrl = await gif(tagWord);
        console.log('url for error gif is: '+gifUrl);
        displayGif(gifUrl);
    } catch (err){
        displayGif(` https://media1.giphy.com/media/FvY1DGxwV1cZYisks7/giphy.gif?cid=830e7a8479469b67004d33271fbbf87ee67ae259eba5881b&rid=giphy.gif&ct=g`)
        console.log(err);
    }
}
setGif()