const fs = require('fs');
let right = 0;
let left = 0;

const steps = fs.readFileSync('rightLeft.txt', 'utf8');
steps.split("").forEach(simbole => simbole == '>' ? right++ : left++);
if(right > left){
    console.log(`go ${right-left} steps to the right`);
}else if(right < left){
    console.log(`go ${left-right} steps to the left`);

}else{
    console.log('stay');
}
