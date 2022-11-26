const prodacts = async () => {
    const promise = await fetch('http://localhost:5000/api/product');
    return await promise.json()
}
const productDiv = document.createElement('div');
document.body.appendChild(productDiv);
// prodacts().then(res => productDiv.textContent = res);
let data;
prodacts().then(res => {
    for(obj of res){
        // productDiv.textContent += Object.entries(obj);
        // productDiv.textContent += JSON.stringify(obj);
        productDiv.textContent += `${obj.name}: ${obj.price}\n`
        console.log( Object.entries(obj));
    }
});
// console.log(data);
