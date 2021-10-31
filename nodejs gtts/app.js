const gtts = require("node-gtts")("en")
const path = require("path")
const filePath = path.join(__dirname, "test.wav")


gtts.save(filePath, "Hello, What's your name ? ", (e) => {
    console.log("cb", e)
})

//router.get("/abc", (req, res) => {
   // const text=req.query.text
    //res.set({"HeaderSet !"})
   // gtts.stream(text).pipe(res)
//})