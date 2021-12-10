const md5 = require('md5')
const fs = require('fs')
const hashString = (str) => {
    return md5(str)
}

const createUploadDir = (str) => {
    if (!fs.existsSync(str)) {
        fs.mkdirSync(str, { recursive: true })
    }
}

module.exports = {
    hashString: hashString,
    createUploadDir: createUploadDir
}

