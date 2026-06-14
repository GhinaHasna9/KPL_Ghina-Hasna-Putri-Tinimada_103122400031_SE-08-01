const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./swagger");

const app = express();
const PORT = 3000;

app.use(express.json());

const menu = [
    {
        nama: "Soto Ayam",
        kategori: "soto"
    },
    {
        nama: "Soto Daging",
        kategori: "soto"
    },
    {
        nama: "Nasi Padang Rendang",
        kategori: "naspad"
    },
    {
        nama: "Nasi Padang Ayam Gulai",
        kategori: "naspad"
    }
];

/**
 * @openapi
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 *     tags:
 *       - Menu
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 kategori_tersedia:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example:
 *                     - bakmi
 *                     - rames
 */
app.get("/menu", (req, res) => {
    const kategori = [...new Set(menu.map(item => item.kategori))];

    res.status(200).json({
        kategori_tersedia: kategori
    });
});

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log(`Swagger tersedia di http://localhost:${PORT}/api-docs`);
});