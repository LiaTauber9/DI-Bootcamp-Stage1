function decrease(){
    let buttllesArr = [99];
    let buttlesSum = 99;
    for(let i = 1; buttlesSum > i; i++){
        buttllesArr.push(buttllesArr[i-1]-i)
        buttlesSum -= i; 
        console.log(`${buttllesArr[i-1]} bottles of beer on the wall \n
        ${buttllesArr[i-1]} bottles of beer \n
        Take ${i} down, pass it around \n
        ${buttllesArr[i]} bottles of beer on the wall`)
    }
}
decrease();