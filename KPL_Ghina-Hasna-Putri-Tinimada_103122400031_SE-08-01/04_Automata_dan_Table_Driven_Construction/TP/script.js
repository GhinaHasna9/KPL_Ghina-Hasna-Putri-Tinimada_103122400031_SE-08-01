const inputBox = document.getElementById("editor-besar");
const resultBox = document.getElementById("editor-kecil");

document.getElementById("btn-besar").onclick = function () {
    let teks = inputBox.value;
    resultBox.value = teks.toUpperCase();
};

document.getElementById("btn-kecil").onclick = function () {
    let teks = inputBox.value;
    resultBox.value = teks.toLowerCase();
};

document.getElementById("mode-gelap").onclick = function () {
    document.documentElement.classList.add("dark-mode");
};

document.getElementById("mode-terang").onclick = function () {
    document.documentElement.classList.remove("dark-mode");
};