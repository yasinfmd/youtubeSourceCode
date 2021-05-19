const fs = require('fs')
const express = require('express');
const got = require('got')
const app = express();
const router = express.Router();
const ytdl = require('ytdl-core');


const url = "https://i0.wp.com/thegeyik.com/wp-content/uploads/2014/09/Berrak-deniz-manzara.jpg"
const url2 = "https://images.unsplash.com/photo-1621290642297-b242a474ea3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
const url3 = "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
const youtubeUrl = "https://www.youtube.com/watch?v=od6GAtKvXG8"
const wstream = fs.createWriteStream('youtube.mp4')

const stream = got.stream(url3)

/*stream.on('data', (chunk) => {
    wstream.write(chunk)
})*/


const getVideoInfo = () => {
    ytdl.getInfo(youtubeUrl).then((response) => {
        //console.log(`response`, response)
    })
}
// stream.on('downloadProgress', ({ transferred, total, percent }) => {
//     const percantange = Math.round(percent * 100)
//     console.log("işleniyorr" + transferred + "/" + total + "-" + percantange)
// })

router.get('/test', (req, res, next) => {
    res.header("Content-Disposition", "attachment; filename=youtubevideo.mp4")
    const youtubeStream = ytdl(youtubeUrl, {
        quality: "18",
        format: "mp4"
    })
    youtubeStream.on('data', (chunk) => {
        wstream.write(chunk)
    })
    youtubeStream.on('progress', (a, b, c) => {
        console.log(a, b, c)
    })
    youtubeStream.pipe(res)
})


//getVideoInfo();

app.use('/', router)

app.listen(4000, () => {
    console.log('calısıyorrr')
})