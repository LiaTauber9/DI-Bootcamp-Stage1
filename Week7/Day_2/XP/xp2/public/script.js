const user = async() => {
return await (await fetch('http://localhost:3000/user')).json()
}
user()
.then(data => {
    console.log(data);
    const userDiv = document.createElement('div');
    const userText = document.createTextNode(JSON.stringify(data));
    document.body.appendChild(userDiv);
    userDiv.appendChild(userText);
});
