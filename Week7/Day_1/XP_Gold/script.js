

function divideTime(time){
    const minutes_div = 1000 *60;
    const hours_div = minutes_div*60;
    const days_div = hours_div *24;
    const days = Math.floor(time / days_div);
    const hours = Math.floor(time % days_div / hours_div);
    const minutes = Math.floor(time % hours_div / minutes_div);
    const seconds = Math.floor(time % minutes_div / (1000)); 
    return {
        days,
        hours,
        minutes,
        seconds
    }
}

const time = () => {
    const now = new Date();
    // const monthes = 10 - now.getMonth()
    // const days = 
    const nextYear = now.getFullYear()+ 1;
    const targetTime = new Date(`${nextYear}-01-01`)
    const timeBetween = Date.parse(targetTime) - Date.now();
    const {days, hours,minutes,seconds} = divideTime(timeBetween)
    // const days = Math.floor(timeBetween / (1000 *60 *60 *24));
    // const hours = Math.floor(timeBetween % (1000 *60 *60 *24) / (1000 *60 *60));
    // const minutes = Math.floor(timeBetween % (1000 *60 *60) / (1000 *60));
    // const seconds = Math.floor(timeBetween % (1000 *60) / (1000));
    // const days1 = Math.floor(timeBetween / days);
    // const hours1 = Math.floor(timeBetween % days / hours);
    // const minutes1 = Math.floor(timeBetween % hours / minutes);
    // const seconds1 = Math.floor(timeBetween % minutes / (1000));
   return(`The 1st January is in ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds.`)
}
time();
module.exports = {
    time
}

//Ex 3
const { nextHolidayTime} = require('./date');
const [holidayTime, holidayName] = nextHolidayTime
console.log(nextHoliday());
function nextHoliday(){
    const {days, hours,minutes,seconds} = divideTime(holidayTime)
    return(`The next holiday - '${holidayName}' starts in ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds.`)
}



