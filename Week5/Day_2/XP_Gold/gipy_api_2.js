const btn = document.querySelector('.btn-close').addEventListener('click', setGif);



function setGif() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=yoga&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status == 200) {
            const data = JSON.parse(xhr.response)
            const random = Math.floor(Math.random() * data.data.length);
            const url = data.data[random].images.fixed_height.url
            console.log(data)
            console.log(url)
            document.querySelector('#img').src = url
        } else {
            console.log('error');
        }
    }

}

setGif();

