function hitung(str, tipe) {
    let total = 0;

    for (const c of str) {
        if (tipe === "huruf" && c === " ") continue;
        total++;
    }

    return total;
}



const str = "Bar bar bar";

console.log(
    hitung(str, "semua") 
);

console.log(
    hitung(str, "huruf") 
);

hitung(str, "huruf"); 