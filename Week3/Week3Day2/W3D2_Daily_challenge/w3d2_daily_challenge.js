//lib game
let inputArr = document.getElementsByTagName('input');
let values = {};
const btn = document.getElementById('lib-button');
btn.addEventListener('click', creatStory);
const btnShuffle = document.getElementById("shuffle_button")
btnShuffle.addEventListener('click', shuffle);
function creatStory(event) {
    event.preventDefault()
    let aprove = true;
    for (i of inputArr) {
        if (isNaN(i.value * 1) && typeof (i.value) != 'undefined') {
            values[i.id] = `${i.value}`;
        } else {
            aprove = false;
            break;
        }
    }
    if (aprove) {
        setStory()
    } else {
        alert("Some words are missing or not valid, try again")
    }
}

// function setStory(){
//     console.log(values);
//     let story = `story one: ***${values.noun} is ${values.adjective}. that's why ${values.person} ${values.verb} in ${values.place}`;
//     document.getElementById('story').textContent = story;
//     document.getElementById("shuffle_button").disabled = false;
//     btn.disabled = true;
// }

//bonus add  “shuffle” button
let shuffleRepeat = 0;
let storiesArr = [];
let randomOrder = randomIndex();

function randomIndex() {
    let arr = [0, 1, 2];
    for (let i of arr) {
        let index = Math.floor(Math.random() * arr.length);
        arr.push(...arr.splice(index, 1))
    }
    console.log(arr);
    return arr;
}

function setStory() {
    storiesArr = [`story one: ***${values.noun} is ${values.adjective}. that's why ${values.person} ${values.verb} in ${values.place}`,
    `story two: ***${values.noun} is ${values.adjective}. that's why ${values.person} ${values.verb} in ${values.place}`,
    `story three: ***${values.noun} is ${values.adjective}. that's why ${values.person} ${values.verb} in ${values.place}`]

    btnShuffle.disabled = false;
    btn.disabled = true;
    displayStory()
}
function displayStory(){
    document.getElementById('story').textContent = storiesArr[randomOrder[shuffleRepeat]];
    shuffleRepeat++
}

function shuffle() {
    if(shuffleRepeat >= 2){
       btnShuffle.disabled = true;   
    }
    displayStory()
}
