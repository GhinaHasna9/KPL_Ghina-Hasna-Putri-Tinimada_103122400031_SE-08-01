const assert = require('assert');

function divide(a, b) {
    
    assert(typeof a === 'number' && typeof b === 'number', 
        'Parameter harus angka');

    if (b === 0) {
        throw new Error("Tidak bisa pembagian dengan nol");
    }

    return a / b;
}

try {
    const hasil = divide(10, 2);
    console.log("Hasil:", hasil);
} catch (err) {
    console.error("Terjadi error:", err.message);
}