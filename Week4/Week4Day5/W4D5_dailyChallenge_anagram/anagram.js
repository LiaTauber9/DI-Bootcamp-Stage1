let str1 = 'Astronomer'.toLowerCase();
let str2 = 'Moon starer';

function isAnigram(str1, str2){
    const st1 = str1.toLowerCase().split("").filter((e)=>e!=" ").sort().join();
    const st2 = str2.toLowerCase().split("").filter((e)=>e!=" ").sort().join();
    return st1 === st2;
}
console.log(isAnigram(str1,str2))
console.log(isAnigram('gtb','gttb'))