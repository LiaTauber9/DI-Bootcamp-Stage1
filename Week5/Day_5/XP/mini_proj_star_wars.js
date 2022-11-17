const [playerNameElem, heightElem, genderElem, yearElem, homeElem, btnElem] = document.getElementsByClassName('elem');
const cardElem = document.querySelector('#card');
const waitElem = document.querySelector('#wait');
const errorMessage = document.querySelector('#errorMessage');
let peopleNum = 0;
let random = 0;

btn.addEventListener('click', onClick);

function randomPeople() {
    while (random === peopleNum) {
        random = Math.ceil(Math.random() * 83);
    }
    peopleNum = random;
    console.log('random num: ' + random);
    return random;
}

async function onClick() {
    try {
        cardElem.style.display = 'none';
        waitElem.style.display = 'unset';
        errorMessage.style.display = 'none'
        const peopleData = await fetch(`https://www.wapi.tech/api/people/${randomPeople()}`).then(res => res.json());
        console.log(peopleData.result.properties)
        const homeData = await fetch(peopleData.result.properties.homeworld).then(res => res.json());
        console.log(homeData.result.properties.name);
        displayCard(peopleData.result.properties, homeData.result.properties.name)
    } catch(err){
        displayError()
        console.log(err)
    }
    
}

function displayCard(peopleData, homelandName) {
    playerNameElem.textContent = peopleData.name;
    heightElem.textContent = `Height: ${peopleData.height}`
    genderElem.textContent = `Gender: ${peopleData.gender}`
    yearElem.textContent = `Birth Year: ${peopleData.birth_year
        }`
    homeElem.textContent = `Home World: ${homelandName}`
    cardElem.style.display = 'unset';
        waitElem.style.display = 'none';
}

function displayError(){
    waitElem.style.display = 'unset';
    errorMessage.style.display = 'unset'
}
