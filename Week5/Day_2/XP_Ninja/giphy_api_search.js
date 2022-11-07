document.querySelector('form').addEventListener('submit', (e) => {
    console.log('event submit');
    e.preventDefault();
    const qValue = document.querySelector('#input').value;
    console.log(qValue);
    createImgList(qValue);
});


function createImgList(qValue){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${qValue}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status == 200) {
            const obj = JSON.parse(xhr.response);
            const list = [];
            for(let item of obj.data){
                console.log(item.images.fixed_height.url);
                list.push(item.images.fixed_height.url)
            }
            console.log(list);
            setImages(list);
        } else {
            console.log('error');
        }
    }
}

function setImages(list){
    console.log('in set function'+list);
    for(let i of list){
        const card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute('style', 'width: 400px; height: 220px');
        const img = document.createElement('img');
        img.classList.add('rounded', 'mx-auto', 'd-block');
        img.src = i;
        document.querySelector('#cards_container').appendChild(card);
        card.appendChild(img);
    }
}

// const list = createImgList('panda');
// console.log(list);