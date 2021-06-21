const exporess = require('express')
const app = exporess()
const cors = require('cors')
const router = exporess.Router()

app.use(cors())
router.get('/download', (req, res, next) => {
    res.setHeader("Content-Type", "image/jpeg")
    res.setHeader('Content-Disposition', "attachment;filename=test.txt")
    res.download('indir.jpg', (err) => {
        console.log('error var', err)
    })
})

app.use('/', router)

app.listen(9000, () => {
    console.log(`running`)
})