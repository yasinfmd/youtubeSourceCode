const express = require('express')
const router = express.Router();
const PORT = process.argv[3] || 3000;
const app = express()


const instanceName = process.env.NODE_APP_INSTANCE || 0;
const Array = [
    {
        name: 'Yasin Dalkılıç',
        id: 1
    },
    {
        name: 'Selin Dalkılıç',
        id: 2
    },
    {
        name: 'Günseli Dalkılıç',
        id: 3
    },
    {
        port: instanceName
    }
]


app.get('/', (req, res, next) => {

    res.status(200).json(Array)
})

app.use('/', router)


app.listen('300' + instanceName, () => {
    console.log('Çalışıyor' + '300' + instanceName)
})

// istek 1 localhost:3000
// istek 2 localhost:3000
// ...............
// 300 localhost:3000
//400 localhost:3001
// 300 localhost:5000