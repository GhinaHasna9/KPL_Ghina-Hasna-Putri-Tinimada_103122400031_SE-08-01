const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/", (req, res) => {
    const { nama, tebakan } = req.body;

    // Membuat angka tetap berdasarkan nama (case-sensitive)
    let jumlah = 0;

    for (let i = 0; i < nama.length; i++) {
        jumlah += nama.charCodeAt(i);
    }

    // Rentang 1–100
    const angkaAcak = (jumlah % 100) + 1;

    let jawaban = "";

    if (tebakan === angkaAcak) {
        jawaban = `Benar sekali! Tebakannya adalah ${angkaAcak}.`;
    } else if (tebakan > angkaAcak) {
        jawaban = "Tebakanmu terlalu tinggi!";
    } else {
        jawaban = "Tebakanmu terlalu rendah!";
    }

    res.json({
        jawaban: jawaban
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});