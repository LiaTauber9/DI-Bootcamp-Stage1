const numbers = [5,0,9,1,7,4,2,6,3,8];
const numbersSt = numbers.toString();
const numbersSt1 = numbers.join("+");
//bonus
const sortedNumbers = numbers.map(num => 0);//create new array of 0 same lengh as numbers array
//in every iteration find the biggest number in numbers and add to sortedNumbers
for(let i=0; i<sortedNumbers.length; i++){
    numbers.forEach(function(num){
        if(num >= sortedNumbers[i]){
            sortedNumbers[i] = num;
        }
    })
//delete the biggest number founded from numbers
    let deleteIndex = numbers.indexOf(sortedNumbers[i]);
    numbers.splice(deleteIndex, 1);
}
console.log(sortedNumbers);
