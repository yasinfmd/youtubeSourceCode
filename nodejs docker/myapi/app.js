const express = require("express")

const app = express()

const router = express.Router()


router.get("/", (req, res, next) => {
    res.send("Çalısıyorum")
})

app.use("/", router)


app.listen(8585, () => {
    console.log("Çalısıyor")
})