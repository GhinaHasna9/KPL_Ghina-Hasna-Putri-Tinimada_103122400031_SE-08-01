/**
 * Mengecek sebuah bilangan dan mengembalikan:
 * - "Fizz" jika habis dibagi 3
 * - "Buzz" jika habis dibagi 5
 * - "FizzBuzz" jika habis dibagi 3 dan 5
 * - angka itu sendiri jika tidak memenuhi kondisi di atas
 * @param {number} value
 * @returns {string|number}
 */
/**
 * @param {number} value
 * @returns {string|number}
 */
function zzzzOrNum(value) {
  if (typeof value !== "number") {
    throw new Error("Input harus number");
  }

  if (value % 3 === 0 && value % 5 === 0) {
    return "FizzBuzz";
  } else if (value % 3 === 0) {
    return "Fizz";
  } else if (value % 5 === 0) {
    return "Buzz";
  } else {
    return value;
  }
}

/**
 * @param {number[]} sequence
 * @returns {(string|number)[]}
 */
function fizzBuzz(sequence) {
  if (!Array.isArray(sequence)) {
    throw new Error("Input harus array");
  }

  let result = [];

  for (let i = 0; i < sequence.length; i++) {
    result.push(zzzzOrNum(sequence[i]));
  }

  return result;
}

module.exports = {
  fizzBuzz,
  zzzzOrNum
};