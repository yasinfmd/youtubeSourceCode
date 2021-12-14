const fs = require('fs')
const jwt = require('jsonwebtoken')

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

const verifyToken = (token) => {
    const isVerify = { decodedToken: null }
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        isVerify.decodedToken = decodedToken
    } catch (e) {
        isVerify.decodedToken = null
    }
    return isVerify
}
const createToken = (data) => {
    const token = jwt.sign({
        userId: data._id,
        fullName: data.full_name,
        email: data.email
    }, process.env.SECRET, {
        issuer: "localhost",
        expiresIn: process.env.EXPIRESIN
    })
    return token

}

module.exports = {
    hashString: hashString,
    createUploadDir: createUploadDir,
    getHost: getHost,
    deleteFileFromDisk: deleteFileFromDisk,
    createToken: createToken,
    verifyToken: verifyToken
}

