//Ex 1
async function fetchToAwait(){
    const prom = await fetch("https://www.swapi.tech/api/starships/9/");
    const prom1 = await prom.json();
    console.log(prom1.result)
}
fetchToAwait();

//Ex 2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall(); // 'resolved'