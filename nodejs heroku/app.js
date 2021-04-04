const expresS = require('express')

const app = expresS();

const router = expresS.Router();


router.get('/', (req, res, next) => {
    res.send('Çalısıyor')
})

router.get('/api/test', (req, res, next) => {
    res.json([{
        id: 1,
        ad: 'yasin',
        soyad: 'dalkılıç'
    }]).status(200)
})


app.use(expresS.json())
app.use(expresS.urlencoded({ extended: true }))

app.use('/', router)


app.listen(process.env.PORT || 3000, () => {
    console.log('çalısıyor')
})