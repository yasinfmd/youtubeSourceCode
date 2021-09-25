const express = require("express")

const app = express()

const router = express.Router()


router.get("/user/get", (req, res, next) => {
    res.json([{ ad: "Yasin" }, { ad: "Ozan" }]).status(200)
})

app.use("/", router)

app.listen(5000, () => {
    console.log("5000 numaralı portta çalısıyorummm")
})