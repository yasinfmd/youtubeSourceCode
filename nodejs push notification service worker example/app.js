const webPush = require('web-push')
const express = require('express')
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const vapidKeys = {
    publicKey: 'BGAEWA2uCzf7PeesmxnIXI2L8btAd72Yy-foJoezCg2nDEGrNsynQBzljYDGLnQvF_l4YBGn7BJOWrXIACgqiTs',
    privateKey: 'o7GdijZZBn-K-13hL96fdIazkB2F4BcwWc_tZtdU7kQ'
}

const subscriberClient = { "endpoint": "https://fcm.googleapis.com/fcm/send/cKpBTmYwuyw:APA91bGh71Mg8MNji1r8BP0yt_JYi_-H9mk-8in_bkeMlkB1ldW_eVTraK0gX_I2izl4sHtGBbnr9S86X6I3dF6aDH6Yt2m044TLn5SaF6wr7RLvie4Os6in6nwiiv1-wMSySnTWZwgf", "expirationTime": null, "keys": { "p256dh": "BIehADCAid5lvM5gab6nkF6zsDmS0cSerhoGHomCXjikv0L1Vj9g-B8RSxx91JQXKnHmw4MBsVrz7rG8qSI52Qw", "auth": "54oXsE4NSeBqsj9fZLYw3Q" } }

webPush.setVapidDetails('mailto:ysndlklc1234@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)
//webPush.sendNotification(subscriberClient, 'Yeni Ürünlerimize Göz Atmak İster Misiniz ? ')

router.get('/', (req, res, next) => {
    res.send('^Çalısıyorum')
})

router.post('/deneme', (req, res, next) => {
    const { msg } = req.body;
    webPush.sendNotification(subscriberClient, msg)
    res.status(200).json({ msg: 'Bildirim Gitti' })

})


app.use('/', router)

app.listen(port, () => {
    console.log(`${port} çalışıyorrrr`)
})