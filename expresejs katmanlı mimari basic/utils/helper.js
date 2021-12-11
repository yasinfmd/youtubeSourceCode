const md5 = require('md5')
const fs = require('fs')

const dns = require("dns")
const os = require("os")
const hashString = (str) => {
    return md5(str)
}

const createUploadDir = (str) => {
    if (!fs.existsSync(str)) {
        fs.mkdirSync(str, { recursive: true })
    }
}
const getHost = () => {
    return new Promise((resolve) => {
        dns.lookup(os.hostname(), (err, ip) => {
            resolve(`http://${ip}:${process.env.APP_PORT}`)
        })
    })
}

module.exports = {
    hashString: hashString,
    createUploadDir: createUploadDir,
    getHost: getHost
}

