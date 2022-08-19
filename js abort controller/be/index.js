const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.get('/api', (req, res) => {
    setTimeout(() => {
        res.json([{ id: 1 }]).status(200)

    }, 3000)
})

app.listen(5000, () => {
    console.log('running')
})