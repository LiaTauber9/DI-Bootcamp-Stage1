let sentence = "The movie is not so bad, I like it";
const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");
const ex = /\bnot\b.*\bbad\b/;
if(ex.test(sentence)){
    sentence = sentence.replace(ex, "good");
}
console.log(sentence);