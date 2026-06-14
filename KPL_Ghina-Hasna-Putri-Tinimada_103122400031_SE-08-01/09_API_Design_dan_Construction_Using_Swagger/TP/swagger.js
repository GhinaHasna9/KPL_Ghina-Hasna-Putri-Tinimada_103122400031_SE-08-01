const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Menu API",
            version: "1.0.0",
            description: "Dokumentasi API Menu"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./index.js"], // lokasi endpoint yang diberi komentar Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;