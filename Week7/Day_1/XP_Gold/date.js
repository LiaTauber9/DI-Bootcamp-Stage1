//ex 1
const {time} = require('./script.js');
console.log(time());
//ex 2
const prompt = require('prompt-sync')();
function lifeTime(birthdayArr){
    const birthday = new Date([...birthdayArr]);
    const lifeTime = Date.now() - Date.parse(birthday);
    return `you lived for ${Math.round(lifeTime / 60000)} minuts`
}
function getBirthday(){
    const birthdayArr = [];
    const keys = ["year", "month", "date"];
    for(key of keys){
        const value = prompt(`Enter ${key} of birth: `)
            birthdayArr.push(value*1)
            console.log(birthdayArr);
    }
    return birthdayArr
}
// console.log(lifeTime(getBirthday()));
//Ex 3
let Holidays = require('date-holidays')
let hd = new Holidays()
hd.init('IL');

const holidaysArr = hd.getHolidays(new Date().getFullYear());
const nextHoliday = holidaysArr.find(hol => new Date(hol.start).getTime() > Date.now())
const nextHolidayTime = [new Date(nextHoliday.start).getTime() - Date.now(), nextHoliday.name]

module.exports = {
    nextHolidayTime
}


