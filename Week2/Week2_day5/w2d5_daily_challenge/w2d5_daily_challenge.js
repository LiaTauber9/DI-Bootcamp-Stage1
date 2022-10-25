function decrease(){
    let buttlesSum = prompt("Enter number of beer buttles")*1;
    let buttllesArr = [buttlesSum];
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