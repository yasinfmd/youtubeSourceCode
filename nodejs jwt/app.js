const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const port = 3000;
const router = express.Router();
const checkJwt = require('./auth')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.post('/login', function (req, res, next) {
    const { email } = req.body
    const token = jwt.sign({
        email: email,
        ad: 'Yasin',
        exp: Math.floor(Date.now() / 1000) + 60,
        issuer: 'www.yayinci.com'
    }, 'secretKey')
    res.send(token)
})
router.post('/posts', checkJwt, function (req, res, next) {
    res.send('<h2>Selam Dünya</h2>')
})
router.get('/', function (req, res, next) {
    res.send('Çalısıyorum')
})

app.use('/', router);
app.listen(port, function () {
    console.log(`localhost:${port} çalısıyor`)
})