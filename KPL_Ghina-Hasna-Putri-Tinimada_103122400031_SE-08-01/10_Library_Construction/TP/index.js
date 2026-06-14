import { countLetters, countWords } from './textUtils.js';

const text = "Halo Dunia 123!";

console.log(`Teks: "${text}"`);
console.log(`Jumlah huruf: ${countLetters(text)}`);
console.log(`Jumlah kata: ${countWords(text)}`);