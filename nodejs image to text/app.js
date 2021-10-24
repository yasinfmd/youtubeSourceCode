const T = require('tesseract.js')


T.recognize("./ss3.png", "eng", {
    gzip: true,
    logger: progress => console.log("İşleniyorr", progress)
}).then((result) => {
    console.log("result text", result.data.text)
    console.log("resulthtml", result.data.hocr)
}).catch((err) => {
    console.log("bir hata olustu", err)
})