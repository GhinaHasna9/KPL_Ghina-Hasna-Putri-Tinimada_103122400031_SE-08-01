const editorBesar = document.getElementById("editor-besar");
const editorKecil = document.getElementById("editor-kecil");


document.getElementById("huruf-besar").onclick = function () {

    let teks = editorBesar.value;
    editorKecil.value = teks.toUpperCase();

};


document.getElementById("huruf-kecil").onclick = function () {

    let teks = editorBesar.value;
    editorKecil.value = teks.toLowerCase();

};