//Exercise 1
const person1 = {
    fullName: "Ron Bar",
    Height: 170,
    mass: 70,
    bmi: function(){
        return this.mass / this.Height
    }
}
const person2 = {
    fullName: "Avi Chen",
    Height: 185,
    mass: 90,
    bmi: function(){
        return this.mass / this.Height
    }
}
function bmi(obj1, obj2){
    const bmi1 = obj1.bmi();
    const bmi2 = obj2.bmi();
    if(bmi1 > bmi2){
        return obj1.fullName
    }
    return obj2.fullName;
}
console.log(bmi(person1, person2));
//Exercise 2
function findAvg(gradesList){
    let average = gradesList.reduce((total, num) => total + num)/gradesList.length;
    console.log(message(average));
}

function message(average){
    if(average > 65){
        return `your average is ${average}. You passed the course`;
    }
    return `your average is ${average} You failed the course`;
}
findAvg([89, 45, 76, 40, 30]);
findAvg([89, 92, 77]);