// one loop
for(let i = 1; i<7; i++){
    document.write("*".repeat(i) + "<br>");
}
//nested loop
for(let i = 1; i<7; i++){
    let p = "";
    for(let ni=1; ni <=i; ni++){
        p += "*";
    }
    document.write(p, "<br>");
}