const xhr = new XMLHttpRequest();
document.querySelector('#form').onsubmit = (e) => {
    e.preventDefault();
    const qValue = document.querySelector('#input').value;
    xhr.open('GET', `https://api.giphy.com/v1/gifs/random?tag=${qValue}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    xhr.send();
}

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log("error status")
        console.log(xhr)
    } else {
        let dataObj = JSON.parse(xhr.response);
        console.log(dataObj);
        displayGiffs(dataObj)
    }
}

function displayGiffs(dataObj) {
    const cont = document.createElement('div');
    cont.setAttribute('style', "width: 50vw; height: 50vw; display: flex; justify-content: center; align-items: center;")
    const img = document.createElement('img')
    img.classList.add('rounded', 'mx-auto', 'd-block');
    img.setAttribute('style', "width: 100%; height: auto;");
    const btn = document.createElement('button');
    btn.classList.add("btn", "btn-outline-success");
    btn.textContent = "DELETE";
    document.body.appendChild(cont)
    cont.appendChild(img);
    cont.appendChild(btn);
    img.src = `${dataObj.data.images.downsized_large.url}`;
    btn.addEventListener("click", () => {
        cont.remove();
        document.querySelector('#input').value = "";    
    })
}


