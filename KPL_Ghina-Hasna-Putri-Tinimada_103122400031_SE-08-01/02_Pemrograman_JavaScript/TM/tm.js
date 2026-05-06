function fizzBuzz(daftarAngka) {

  if (!Array.isArray(daftarAngka)) {
    return "Input tidak valid";
  }

  let hasil = [];

  for (let i = 0; i < daftarAngka.length; i++) {
    let angka = daftarAngka[i];

    if (angka % 14 === 0) {
      hasil.push("FizzBuzz");
    } else if (angka % 7 === 0) {
      hasil.push("Buzz");
    } else if (angka % 2 === 0) {
      hasil.push("Fizz");
    } else {
      hasil.push(angka);
    }
  }

  let pemisah = " ";


  for (let i = 0; i < daftarAngka.length; i++) {
    if (daftarAngka[i] < 0) {
      pemisah = ", ";
    }
  }


  if (daftarAngka[0] === 1) {
    pemisah = ", ";
  }

  return hasil.join(pemisah);
}

module.exports = fizzBuzz;