const express = require('express')
const NRP = require('node-redis-pubsub')

const app = express()
const router = express.Router()
const config = {
    port: 6379,
    scope: 'mail'
}
const nrp = new NRP(config)
app.use(express.json())
router.get('/user', (req, res) => {
    res.json({
        id: 1
    })
})

router.post('/newuser', (req, res) => {
    const { userName, email } = req.body
    nrp.emit('send_mail', { email })
    res.json({
        success: true,
        userName,
        email
    })
})

app.use(router)

app.listen(5000, () => {
    console.log('5000', 5000)
})