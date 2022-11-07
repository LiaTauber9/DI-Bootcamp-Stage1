// AJAX
// Make an HTTP request using the GET METHOD on this API: https://jsonplaceholder.typicode.com/users

// Use the method onload, onprogress, onerror

// If there is no error, display on the page the name, email, city of the 3 first users
const xhr = new XMLHttpRequest();
// let data;
function request(){
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();     
}

xhr.onload = () => {
    console.log('data loaded successfuly')
    if(xhr.status == 200){   
        const data = JSON.parse(xhr.response);
        console.log(data);
        creatCards(data);
    }else{
        console.log('error');
    }
}

function creatCards(data){
    const container = document.createElement('section')
    container.classList.add('row', 'row-cols-3')
    document.body.appendChild(container);
    console.log(container);
    for (let i = 0; i<3; i++){
        const card = document.createElement('div');
        card.classList.add("card");
        card.setAttribute('index', i);
        container.appendChild(card);
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        card.appendChild(cardTitle);
        cardTitle.textContent = data[i].name;
        const cardMail = document.createElement('p');
        cardMail.classList.add('card-text');
        card.appendChild(cardMail);
        cardMail.textContent = data[i].email;
        const cardCity = document.createElement('p');
        cardCity.classList.add('card-text');
        card.appendChild(cardCity);
        cardCity.textContent = data[i].address.city
        console.log(card);

        // cardsElemList.push(card); 
    }
}

xhr.onprogress = () => {
    console.log('data loading is in progress')
}

xhr.onerror = () => {
    console.log("error: data isn't loaded")
}

request();