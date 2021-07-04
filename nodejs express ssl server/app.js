const express = require('express')
const app = express()
const http = require('http')
const https = require('https')
const router = express.Router()
const fs = require('fs')

const privateKey = fs.readFileSync("selfsigned.key")
const certificate = fs.readFileSync('selfsigned.crt')
const credentials = {
    key: privateKey,
    cert: certificate
}

router.get("/", (req, res, next) => {
    res.json({
        ad: "Yasin",
        soyad: "Dalkılıç"
    }).status(200)
})

app.use('/', router)

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(8000, () => {
    console.log(`No ssl server 8000 running`)
})

httpsServer.listen(8001, () => {
    console.log(`Ssl server 8001 running`)
})