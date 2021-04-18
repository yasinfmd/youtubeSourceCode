const express = require('express')
const app = express();
const PORT = 3000;
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mock_data = [
    {
        id: 1,
        ad: 'Yasin',
        soyad: 'Dalkılıç'
    }, {
        id: 2,
        ad: 'Selin',
        soyad: 'Dalkılıç'
    }
]

router.get('/api/users', (req, res, next) => {
    res.json(mock_data).status(200)
})

app.use('/', router)


app.listen(PORT, () => {
    console.log('3000 numaralı portta çalısıyor')
})