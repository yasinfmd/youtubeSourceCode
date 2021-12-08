const swaggerJsDoc = require('swagger-jsdoc')

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Blog Uygulaması",
            version: "1.0.0",
            description: "Katmanlı Backend Uygulaması"
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ]
    },
    apis: ["./controllers/user/*.js"]
}
const swaggerDocs = swaggerJsDoc(options)
module.exports = {
    swaggerDocs: swaggerDocs
}