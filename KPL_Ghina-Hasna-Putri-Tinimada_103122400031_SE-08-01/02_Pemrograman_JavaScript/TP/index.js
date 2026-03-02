console.log(mulOfArray([2, 0, 26, 28, -2]));

function mulOfArray(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {   // hanya kalikan angka positif
      result *= arr[i];
    }
  }

  return result;
}