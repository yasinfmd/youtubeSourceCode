const express = require('express')
const app = express();
const router = express.Router();
const port = 3000;

const { check, validationResult, param } = require('express-validator')

const validator = [check('email').exists().withMessage('Bu Alan Yok').isEmail().withMessage('Bu Alan Email Değil'),
check('parola', 'Parola Boş Olamaz').notEmpty({ ignore_whitespace: true }),
check('parola', 'Parola 2 Den Küçük Olamaz').isLength({ min: 2, max: 20 }),
check('parola', 'Bu Parolalar Olmaz').isIn(['123', 'abc']),
check('email', 'Bu Email Kara Listede').custom((value) => {
    if (value === "ysndlklc1234@gmail.com") {
        return false
    }
    return true;

})

];
const otherValidator = [param('id', 'id değerini beğenmedim').custom(value => {
    if (value === "12") {
        return false
    }
    return true;
})]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router);

router.get('/', (req, res, next) => {
    res.send('Selam');
})

router.get('/deneme/:id', otherValidator, (req, res, next) => {
    const id = req.params;
    const errors = validationResult(req);
    console.log('errors', errors)
    console.log('id', id)
    res.send('Merhaba');
})

router.post('/kayitol', validator, (req, res, next) => {
    //const { email, parola } = req.body;
    const errors = validationResult(req);
    console.log('errors', errors)
    res.send('Selam')
    //res.json({ email, parola }).status(200);
})

app.listen(port, () => {
    console.log('sunucu çalısıyor')
})