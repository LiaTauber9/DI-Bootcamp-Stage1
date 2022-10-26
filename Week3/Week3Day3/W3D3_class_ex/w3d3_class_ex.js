//Exercise 1
let index = 10;
const banner = document.createElement('div');
banner.classList.add('hide');
document.body.appendChild(banner);


function show(){ 
    banner.textContent = `The sales end in ${index}sec ! `;   
    banner.classList.add('show')
}
// setTimeout(show, 5000);

//Exercise 2
function interval(){
    let myInterval = setInterval(countDown, 2000);
    function countDown(){
        if(index > 0){
            show();
            index--;   
        }else{
            clearInterval(myInterval);
            banner.textContent = "sales ended ! !"
        }
    }
}
setTimeout(interval, 5000);






















// function change(){
//     banner.style.display = 'none';
//     // banner.classList.remove('show');
//     index--;
//     if(index > 0){
//         setTimeout(show, 2000)
//     }else{
//         clearInterval()
//     }
    
// }

// // setTimeout(show, 5000);



// function message(){
//     const message = document.createElement('div');
//     message.classList.add('show');
//     message.textContent = `The sales end in ${index}min ! `;
//     document.body.appendChild(message)
//     index--
// }
// // for(let sec = 1000; sec <=10000; sec+=1000){
// //     setTimeout(message, sec);
// // }