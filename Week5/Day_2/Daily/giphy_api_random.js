const xhr = new XMLHttpRequest();
document.querySelector('#form').onsubmit = (e) => {
    e.preventDefault();
    const qValue = document.querySelector('#input').value;
    // xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
    xhr.open('GET', `api.giphy.com/v1/gifs/random?tag=${qValue}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    // api.giphy.com/v1/gifs/random
    xhr.send();
}

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log("error status")
        console.log(xhr)
    } else {
        let dataObj = JSON.parse(xhr.response);
        console.log(dataObj.data);
        // displayGiffs(dataObj)
    }
}

function displayGiffs(dataObj) {
    let img = document.queryCommandValue("#img");
    img.classList.add('rounded', 'mx-auto', 'd-block');
    img.src = `${dataObj.data.images.downsized_large.url}`;
}

let deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {
    document.querySelector("#container").remove();
    document.querySelector('#input').value = "";

})

