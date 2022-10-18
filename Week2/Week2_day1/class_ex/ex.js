//Exercise 1
const addressNumber = 7;
const addressStreet = "hapalmach";
const country = "Israel";
const globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`;
console.log(globalAddress);
//Exercise 2
const birthyear = 1985;
const futureyear = 2030;
console.log(`I will be ${futureyear - birthyear} in ${futureyear}`);
//Exercise 3
const pets =  ['cat','dog','fish','rabbit','cow'];
console.log(pets);
pets.splice(3, 1, "horse");
console.log(pets);