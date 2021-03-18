const express = require('express')
const app = express();
const router = express.Router();
const port = 8888;
const bodyParser = require('body-parser')
const emailPublisher = require('./publisher')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


router.get('/', (req, res, next) => {
    res.send('Selam Çalışıyorum')
})

router.post('/register', async (req, res, next) => {
    const { email } = req.body;

    await emailPublisher(email);
    res.status(200).json({ msg: 'Kayıt İşleminiz Başarılı , Birazdan Email Gelecektir.' })
    // setTimeout(() => {
    //     res.status(200).json({ email: email, date: Date.now() })
    // }, 10000)
    // email 

    //  İsteğiniz başarıyla alında cevap gelince sizin haberiniz olucaktır
    // işler
    // işler 2

})

app.use('/', router);

app.listen(port, () => {
    console.log('Çalışıyorum' + port)
})
