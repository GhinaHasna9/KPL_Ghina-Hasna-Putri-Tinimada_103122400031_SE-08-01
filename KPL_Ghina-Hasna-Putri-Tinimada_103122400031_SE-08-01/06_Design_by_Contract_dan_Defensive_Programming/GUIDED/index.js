function devide(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    throw new TypeError("Nilai harus bilangan bulat");
  }

  if (b === 0) {
    throw new Error("Tidak bisa pembagian dengan nol");
  }
  const hasil = a / b;

  if(hasil + b === a){
    return hasil;
  }
  return hasil;
}

try { console.log(
    divide(10, 2)
);
} catch (error) {    console.error("Error:", error); }
  consule