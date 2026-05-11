function toNumberArray(number) {
  // kalau input string, ubah jadi array dulu
  if (typeof number === "string") {
    number = number.split(",");
  }

  return number
    .map(n => parseFloat(n))
    .filter(n => !isNaN(n));
}
console.log(toNumberArray(["1", "2"]))             // [1, 2]
console.log(toNumberArray([" 11", "55", "33 "]))   // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"]))// [0.2, -11]
