const express = require("express")
const app = express()
const path = require("path")


app.use(express.static(path.join(__dirname, "public"), {
    maxAge: "1h",
    immutable: true,
    lastModified: true,
    setHeaders: (res, path, stats) => {
        console.log("path", path)
        console.log("stats", stats)
        res.set({
            "X-CUSTOM-MESSAGE": Date.now()
        })
    }
}))

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(4000, () => {
    console.log("Running server on 4000 port")
})