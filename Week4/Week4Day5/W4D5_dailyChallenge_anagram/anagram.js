let str1 = 'Astronomer'.toLowerCase();
let str2 = 'Moon starer';

function isAnigram(str1, str2){
    const st1 = str1.toLowerCase().split("").filter((e)=>e!=" ");
    const st2 = str2.toLowerCase().split("").filter((e)=>e!=" ");
    return st1.every(e=>st2.includes(e)) && st1.length == st2.length
}console.log(isAnigram(str1,str2))