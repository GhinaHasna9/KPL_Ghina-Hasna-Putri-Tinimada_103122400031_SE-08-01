/**
 * Menghitung jumlah huruf A-Z (besar dan kecil).
 * Spasi, angka, dan simbol tidak dihitung.
 */
export function countLetters(text) {
    const letters = text.match(/[a-zA-Z]/g);
    return letters ? letters.length : 0;
}

/**
 * Menghitung jumlah kata.
 * Kata dipisahkan oleh spasi.
 */
export function countWords(text) {
    const words = text.trim().split(/\s+/);

    if (text.trim() === "") {
        return 0;
    }

    return words.length;
}