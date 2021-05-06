const express = require('express')
const app = express();

const router = express.Router();
const fs = require('fs')
const status = fs.statSync("Youtube.mp4")
const size = status.size;

console.log(`size`, size)
router.get('/partial', (req, res, next) => {
    const range = req.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0])
        const end = parts[1] ? parseInt(parts[1]) : size - 1
        const chunkSize = (10 ** 6) * 3
        const file = fs.createReadStream("Youtube.mp4", { start, end })
        console.log(`start`, start)
        console.log(`end`, end)
        const headers = {
            "Content-Range": `bytes ${start}-${end}/${size}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunkSize,
            "Content-Type": "video/mp4"
        }
        res.writeHead(206, headers)
        file.pipe(res)
    }
})

router.get('/test', (req, res, next) => {
    fs.readFile("Youtube.mp4", (err, data) => {
        if (err) {
            console.log(`err`, err)
        }
        console.log('data', data)
        res.send(data)
    })
})
app.use('/', router)


app.listen(5000, () => {

})