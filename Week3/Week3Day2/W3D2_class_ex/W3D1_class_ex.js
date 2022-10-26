// Exercise 1 - basic add event listener

// Create two buttons - id of "red", id of "blue"
// When we click on the red button -> Change the backgroundcolor of the page to red
// When we click on the blue button -> Change the backgroundcolor of the page to blue

// Exercise 2 - using the event object

// const colors = ["blue", "yellow", "green", "pink"];

// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color of the document, to the text content of the button (do it directly in the JS)

// Exercise 3 - Pictures

// const pics = [ "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" "https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ];

// Using this array, create a button on the page that when clicked on display 3 animals photo, but the order of the picture should be random
// Set a class to the image, so each image will be 200px height, and width, and in the middle of the page
// Add a button next to each image
// When we click on one image, it should disapear(ie. be deleted),
// When we hover on the image, it should display the "alt".

//Exercise 1
const redButt = document.getElementById("red");
const blueButt = document.getElementById("blue");
redButt.addEventListener("click", bgColor);
blueButt.addEventListener("click", bgColor);
function bgColor(event){
    const color = event.target.textContent.toLowerCase()
    document.body.style.backgroundColor = color
}

//Exercise 1
const colors = ["blue", "yellow", "green", "pink"];
let wraper = document.getElementById('container');

for(let color of colors){
    const butt =  document.createElement('button');
    butt.textContent = color;
    butt.addEventListener("click", bgColor);
    wraper.appendChild(butt);
}

//Exercise 1
const pics = [ "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ];

const displayButt = document.createElement('button');
displayButt.textContent = 'Display';
displayButt.addEventListener('click', display)
document.body.appendChild(displayButt);

function display(event){
    console.log("enreted display function");
    const indexArr = randomIndex();
    for(let i of indexArr){
       const divImg = document.createElement('div');
       divImg.classList.add('div');
       const image = document.createElement('img');
       image.src = pics[i];
       image.alt = "Cute Animale";
       image.title = image.alt;
       image.classList.add('img');
       const btn = document.createElement('button');
       btn.textContent = "Delete me";
       document.body.appendChild(divImg)
        divImg.appendChild(image);
        divImg.appendChild(btn);
       btn.addEventListener('click', function(){
        divImg.style.display='none'
       })
    }
}

function randomIndex(){
    let arr = [0,1,2];
    for(let i of arr){
        let index = Math.floor(Math.random()* arr.length);
        arr.push(...arr.splice(index,1))
    }
    // option 2
    // let newArr =[];
    // while(arr.length > 0){
    //     let index = Math.floor(Math.random()* arr.length);
    // newArr.push(arr[index]);
    // arr.splice(index,1)
    // }
    return arr;
}

