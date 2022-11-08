//Ex 1 comparison
function compareToTen(num){
    const isSmaller = new Promise((resolve, reject) => {
        if(num<10){
            resolve(num)
        } else{
            reject("equal or bigger then 10")
        }
    })
    return isSmaller;
}
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));

//ex 2
//#1
const resolvedProm = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(console.log("success")),4000)
}).catch((err) => console.log(err));
//#2
Promise.resolve(setTimeout(()=> (console.log("success")),4000)).catch(() => console.log('Ooops something went wrong'));
//ex 3
const prom1 = Promise.resolve(3);
prom1.then((res)=>console.log(res),(rej)=>console.log(rej));
const prom2 = Promise.reject("Boo!").catch(err=>console.log(err));
console.log(prom1,prom2);
