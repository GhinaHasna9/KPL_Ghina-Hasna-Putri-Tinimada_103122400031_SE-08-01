let teks = document.getElementById("teks");

teks.addEventListener("input", hitung);

function hitung(){
let value = teks.value;

document.getElementById("jumlah").innerText = value.length;

let hurufBesar = (value.match(/[A-Z]/g) || []).length;
let hurufKecil = (value.match(/[a-z]/g) || []).length;

document.getElementById("besar").innerText = hurufBesar;
document.getElementById("kecil").innerText = hurufKecil;
}

function besar(){
teks.value = teks.value.toUpperCase();
hitung();
}

function kecil(){
teks.value = teks.value.toLowerCase();
hitung();
}

function paragraf(){
let kalimat = teks.value.toLowerCase();
teks.value = kalimat.charAt(0).toUpperCase() + kalimat.slice(1);
hitung();
}