# Jurnal 04: 


  **Nama** : Ghina Hasna Putri Tinimada  
  **NIM** : 103122400031  
  **Kelas** : SE-08-01  
  

**Soal**

Tambahkan mode sepia dengan ketentuan:

Elemen         |	Warna
Latar belakang | #F4ECD8
Warna teks     |	#5B4636

Biarkan form tetap warna putih.

Ketentuan lainnya:

Bagian mode-div harus menaungi tiga button: light, dark, dan sepia
Bisa berpindah state secara mulus: sepia menghasilkan sepia-mode, dark menghasilkan dark-mode, dan light menghasilkan light-mode

**Kode sumber**

[index.html](index.html) [script.js](script.js) [style.css](style.css)


**Output**

<video controls src="20260401-0012-35.1784023.mp4" title="Title"></video>

**Deskripsi Program**

Program ini aplikasi web sederhana buat ngubah gaya teks sekaligus ganti tampilan. User bisa ngetik teks di kolom yang disediakan, terus ada tombol buat ubah jadi huruf besar atau huruf kecil. Jumlah huruf juga langsung keitung otomatis pas lagi ngetik.

Selain itu ada pilihan mode terang, gelap, dan sepia. Kalau salah satu mode dipilih, warna tampilan langsung berubah sesuai tema, tapi bagian textarea tetap putih biar tetap gampang dibaca. Perubahannya juga halus karena pakai efek transisi.

Program ini dibuat pakai HTML buat tampilan, CSS buat ngatur warna dan desain, dan JavaScript buat ngatur fungsi tombol, hitung huruf, sama ganti mode.