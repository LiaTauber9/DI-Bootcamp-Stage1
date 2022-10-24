//Exercise 3
const nav = document.getElementById('navBar');
nav.setAttribute("id", 'socialNetworkNavigation');
const li = document.createElement('li');
const txt = document.createTextNode('Log out');
li.appendChild(txt);
document.body.getElementsByTagName('ul')[0].appendChild(li);
//bonus
console.log(nav.firstElementChild.textContent);
console.log(nav.lastElementChild.textContent);

//Exercise 4
let allBooks = [{
    title: 'Shantaram',
    author: 'Gregory David Roberts',
    image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9783/4424/9783442473083.jpg',
    alreadyRead: false
},
{
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J. K. Rowling',
    image: 'https://m.media-amazon.com/images/I/513TQ4ihqqL.jpg',
    alreadyRead: true
}
]
let table = document.createElement('table');
document.body.appendChild(table);
// const th = table.createTHead();
const trHeader = table.insertRow(); 
// const tf = table.createTFoot();
const trFooter = table.insertRow();
for(let book of allBooks){
    const details = trHeader.insertCell();
    details.textContent =`${book["title"]} written by ${book["author"]}`
    const img = document.createElement('img');
    img.setAttribute('src', book['image']);
    img.setAttribute("style", "width: 100px;");
    trFooter.insertCell().appendChild(img);
    if(book['alreadyRead']){
        details.setAttribute("style", "background-color: red;")
    }
}
