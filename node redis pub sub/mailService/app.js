const express = require('express')

const NRP = require('node-redis-pubsub')

const app = express()
const router = express.Router()
const config = {
    port: 6379,
    scope: 'mail'
}
const nrp = new NRP(config)

nrp.on('send_mail', (data) => {
    console.log('data', data)
        // git mail at !
})
nrp.on('error', () => {
        console.log('error')
    })
    //güvenli mevcut işini bitir öyle bağlantıyı kes
nrp.quit()
    //işlemi direk sonlandır
nrp.end()
router.get('/mail', (req, res) => {
    res.json({
        id: 10
    })
})
app.use(router)

app.listen(4000, () => {
    console.log('4000', 4000)
})