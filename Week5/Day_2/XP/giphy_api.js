//Ex 1
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
xhr.send();
xhr.onload = () => {
    if(xhr.status == 200){
        const data = JSON.parse(xhr.response)
       console.log(data)

    }else{
        console.log('error');
    }
}

//Ex 2
const xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
xhr2.send();
xhr2.onload = () => {
    if(xhr2.status == 200){
        const data = JSON.parse(xhr2.response)
       console.log(data)

    }else{
        console.log('error');
    }
}
