const inputBox = document.getElementById("editor-besar");
const resultBox = document.getElementById("editor-kecil");

// tombol huruf besar
document.getElementById("btn-besar").onclick = function () {
    let teks = inputBox.value;
    resultBox.value = teks.toUpperCase();
};

// tombol huruf kecil
document.getElementById("btn-kecil").onclick = function () {
    let teks = inputBox.value;
    resultBox.value = teks.toLowerCase();
};

// aktifkan mode gelap
document.getElementById("mode-gelap").onclick = function () {
    document.documentElement.classList.add("dark-mode");
};

// kembali ke mode terang
document.getElementById("mode-terang").onclick = function () {
    document.documentElement.classList.remove("dark-mode");
};