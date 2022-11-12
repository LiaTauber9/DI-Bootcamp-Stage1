function makeAllCaps(wordsArr){
    const isString = new Promise((resolve, reject) => {
            if(wordsArr.every(w=> typeof(w)=='string')){
                const uCArr = wordsArr.map(v=>v.toUpperCase());
                resolve(uCArr)
            } else{
                reject("Some of the elemnts aren't string")
            }
        })
        return isString
}

function sortWords(wordsArr){
    const isLength = new Promise((resolve, reject) => {
        if(wordsArr.length > 4){
            wordsArr.sort();
            resolve(wordsArr)
        } else{
            reject('less then 4 items in the list')
        }
    })
    return isLength
}

//test
//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))

//#2
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
  function toJs(json){
    const jsToObj = JSON.parse(json)
    console.log(jsToObj.length);
    const prom1 = new Promise((resolve, reject) => { 
        if(Object.keys(jsToObj).length != 0){
            resolve(jsToObj)
        } else{
            reject('JSON is empty')
        }
    })
    return prom1
  }

  function toMorse(morseJS){
    const promptString = prompt('enter a word').toLocaleLowerCase().split(""); 
    const prom2 = new Promise((resolve, reject) => {
        if(promptString.every(c=> morseJS[c])){
            resolve(promptString.map(c=>morseJS[c]))
        } else{
            reject(new Error("some characters aren't valid"))
        }
    })
    return prom2
  }
function joinWords(morseTranslation){
    document.querySelector('body').textContent = morseTranslation.join('\n');    
}
toJs(morse).then(res=>toMorse(res)).then(res=>joinWords(res)).catch(rej=>console.log(rej));