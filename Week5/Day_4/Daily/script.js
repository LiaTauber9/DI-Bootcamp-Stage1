const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});
async function output(promises) {
    console.log(promises);
    return await Promise.all(promises);
}
output([promise1, promise2, promise3])
    .then(res => console.log(res))
    .catch(err => console.log(err));

//output:
// line 7: (3) [Promise, 42, Promise]
// the result of Promise.all is an array of results of the  promises in the parences
// line 11: (3) [3, 42, 'foo']

//Ex 2
document.querySelector('#form').addEventListener('submit', onsubmit);
function onsubmit(event) {
    event.preventDefault();
    const lat1 = event.target.lat1.value
    const long1 = event.target.long1.value
    const lat2 = event.target.lat2.value
    const long2 = event.target.long2.value
    getSunrise([lat1, long1], [lat2, long2])

}
async function getSunrise(arr1, arr2) {
    const sunriseProm1 = fetch(`https://api.sunrise-sunset.org/json?lat=${arr1[0]}&lng=${arr1[1]}`);
    const sunriseProm2 = fetch(`https://api.sunrise-sunset.org/json?lat=${arr2[0]}&lng=${arr2[1]}`);

    try {
        const promsArr = await Promise.all([sunriseProm1, sunriseProm2]);
        const promsArr1 = await Promise.all(promsArr.map(prom => prom.json()));
        const [sunrise1, sunrise2] = promsArr1.map(prom => prom.results.sunrise)
        console.log(promsArr1);
        console.log(sunrise2);
        console.log(sunrise1);
        displaySunrise(sunrise1, sunrise2);
    } catch {
        console.log('error')
    }
}

function displaySunrise(time1,time2){
    const p =  document.createElement('p');
    p.textContent = `Sunrise in first city is on: ${time1} and in second city is on: ${time2}`;
    document.body.appendChild(p);
}