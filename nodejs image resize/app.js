const express = require("express")
const app = express()
const router = express.Router()
const sharp = require("sharp")
const path = require("path")


router.get("/", async (req, res) => {
    const { width, height, rotate, blur } = req.query
    const result = await sharp(path.join(__dirname, "uploads", "cat.jpg"))
        .resize({ width: +width || 200, height: +height || 200, fit: sharp.fit.fill })
        .gamma(1.5)
        .rotate(+rotate || 0)
        .blur(+blur || false)
        .toBuffer()
    //  const encodBuffer = result.toString("base64")
    res.send(result)
    // .toFile(path.join(__dirname, "uploads", "newcat.jpg"))
    //res.sendFile(path.join(__dirname, "uploads", "newcat.jpg"))
})


app.listen(4000, () => {
    console.log("Çalısıyor")
    app.use("/", router)
})