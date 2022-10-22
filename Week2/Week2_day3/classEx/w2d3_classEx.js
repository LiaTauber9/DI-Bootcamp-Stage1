for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.getElementById("p").textContent += `${i} is even. \r\n`;
        // document.write(`${i} is even. <br>`)
    } else {
        document.getElementById("p").textContent += `${i} is even.` + "\r\n";
        // document.write(`${i} is odd. <br>`)
    }
}
//Exercise 2
let names = ["john", "sarah", 23, "Rudolf", 34];
for (let n of names) {
    if (typeof n === "string") {
        if (/[a-z]/.test(n[0])) {
           n = n[0].toUpperCase() + n.slice(1)
        }
        console.log(n);
    } else {
        continue
    }
}
for (n of names) {
    if (typeof n != "string") {
        break
    } else {
        console.log(`the name is: ${n}`);
    }
}