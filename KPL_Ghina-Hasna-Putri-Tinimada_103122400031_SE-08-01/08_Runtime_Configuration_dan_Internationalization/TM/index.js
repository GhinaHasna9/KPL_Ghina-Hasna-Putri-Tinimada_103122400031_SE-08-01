// Hapus baris promosi dotenv
// const dotenv = require('dotenv');
// dotenv.config();

const https = require('https');

// Gunakan BASE_API dari environment variable atau URL default
const BASE_API = process.env.BASE_API || 'https://api.exchangerate.host/latest?base=IDR';

function getExchangeRates() {
    return new Promise((resolve, reject) => {
        const url = new URL(BASE_API);
        const options = {
            hostname: url.hostname,
            path: url.pathname + url.search,
            method: 'GET',
            timeout: 10000
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    resolve(json);
                } catch (e) {
                    reject(e);
                }
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        req.on('timeout', () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });

        req.end();
    });
}

async function main() {
    try {
        const data = await getExchangeRates();

        const idrAmount = 25000;

        // Untuk API exchangerate.host
        let cnhRate, eurRate, date;

        if (data.rates) {
            cnhRate = data.rates.CNH;
            eurRate = data.rates.EUR;
            date = data.date;
        } else if (data.idr) {
            // Untuk format API yang Anda berikan sebelumnya
            cnhRate = data.idr.cnh;
            eurRate = data.idr.eur;
            date = data.date;
        } else {
            throw new Error('Format API tidak dikenali');
        }

        const cnhAmount = idrAmount * cnhRate;
        const eurAmount = idrAmount * eurRate;

        const formattedDate = new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        console.log(`Kurs Rp${idrAmount.toLocaleString('id-ID')} pada ${formattedDate} adalah CNH ${cnhAmount.toLocaleString('id-ID', {minimumFractionDigits: 2, maximumFractionDigits: 2})} dan ${eurAmount.toLocaleString('id-ID', {minimumFractionDigits: 2, maximumFractionDigits: 2})} €`);

    } catch (error) {
        console.error('Error:', error.message);

        // Fallback dengan data statis
        console.log('\nMenggunakan data cadangan...');
        const idrAmount = 25000;
        const cnhRate = 0.00039205353;
        const eurRate = 0.000049098488;

        const cnhAmount = idrAmount * cnhRate;
        const eurAmount = idrAmount * eurRate;

        const formattedDate = new Date('2026-05-05').toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        console.log(`Kurs Rp${idrAmount.toLocaleString('id-ID')} pada ${formattedDate} adalah CNH ${cnhAmount.toLocaleString('id-ID', {minimumFractionDigits: 2, maximumFractionDigits: 2})} dan ${eurAmount.toLocaleString('id-ID', {minimumFractionDigits: 2, maximumFractionDigits: 2})} €`);
    }
}

main();
