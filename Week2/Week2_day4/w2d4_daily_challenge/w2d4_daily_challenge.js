let arrPrompt = prompt("Enter a sentance, words seperated by comma").split(",");
const arrLength = arrPrompt.map(i => i.length);
const maxLength = Math.max(...arrLength);
let starsLine = "*".repeat(maxLength + 4);
let spacedArr = arrPrompt.map(function(word){
    const space = " ".repeat(maxLength - word.length + 1)
    return "* " + word + space + "*"
})
spacedArr.push(starsLine);
spacedArr.unshift(starsLine);
spacedArr.forEach(word => console.log(word));

