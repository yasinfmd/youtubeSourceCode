const fs = require('fs')
const hashString = (str) => {
    const md5 = require('md5')
    return md5(str)
}

const createUploadDir = (str) => {
    if (!fs.existsSync(str)) {
        fs.mkdirSync(str, { recursive: true })
    }
}
const getHost = () => {
    const dns = require("dns")
    const os = require("os")
    return new Promise((resolve) => {
        dns.lookup(os.hostname(), (err, ip) => {
            resolve(`http://${ip}:${process.env.APP_PORT}`)
        })
    })
}

const deleteFileFromDisk = (fileName) => {
    console.log("fileName", fileName)
    if (fs.existsSync(`uploads/images/${fileName}`)) {
        fs.unlink(`uploads/images/${fileName}`, (err) => {
            if (err) return false
            return true
        })
    }
    return true
}

const createToken = () => {
    const jwt = require('jsonwebtoken')

}

module.exports = {
    hashString: hashString,
    createUploadDir: createUploadDir,
    getHost: getHost,
    deleteFileFromDisk: deleteFileFromDisk
}

