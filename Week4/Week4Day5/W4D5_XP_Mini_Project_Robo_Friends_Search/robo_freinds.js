const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];

const cardsCont = document.getElementById('cards_container');
let cardsElemList = [];
for(let robot of robots){
    const card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute('index', robot.id);
    cardsCont.appendChild(card);
    const cardImg = document.createElement('img');
    cardImg.src = robot.image;
    cardImg.classList.add("card-img-top");
    card.appendChild(cardImg);
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = robot.name;
    card.appendChild(cardTitle);
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = robot.email;
    card.appendChild(cardText);
    cardsElemList.push(card); 
}
const searchInput = document.querySelector('.navbar input');
const searchBtn = document.querySelector('.navbar button');
searchBtn.addEventListener('click', search);
function search(e){
    e.preventDefault();
    const val = searchInput.value.toUpperCase();
    for(let i = 0; i<10; i++){
        if(robots[i].name.toUpperCase().includes(val)){
            cardsElemList[i].style.display = 'flex'
        }else{
            cardsElemList[i].style.display = 'none'
        } 
    }
}