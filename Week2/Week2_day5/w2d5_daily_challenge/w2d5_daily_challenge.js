function decrease(){
    let butllesArr = [99];
    let buttlesSum = 99;
    for(let i = 1; buttlesSum > i; i++){
        butllesArr.push(butlles[i-1]-i)
        buttlesSum -= i; 
        console.log(`${buttlles[i-1]} bottles of beer on the wall \n
        ${butlles[i-1]} bottles of beer \n
        Take ${i} down, pass it around \n
        ${butlles[i]} bottles of beer on the wall`)
    }
}