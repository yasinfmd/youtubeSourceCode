const fs = require('fs')
const stream = fs.createReadStream("test.txt")
const wstream = fs.createWriteStream("test2.txt")

fs.stat("test.txt", (err, data) => {
    console.log('size', data.size)
    const size = data.size;
    let chunkSize = 0;
    stream.on('data', (chunk) => {
        //console.log('okunan byte', chunk.length)
        //console.log('chunk', chunk.toString())
        chunkSize += chunk.length;
        console.log('percent', Math.round(chunkSize * 100 / size))
        //wstream.write(chunk)
    })

})
stream.pipe(wstream)
wstream.on("finish", () => {
    console.log(`yazma bitti`)
})
stream.on('end', () => {
    console.log('veri okuma işlemi bitti')
})