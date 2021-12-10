const multer = require('multer')
const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"]
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.env.UPLOAD_DIR)
    },
    filename: function (req, file, cb) {
        const randomName = `${Date.now()}_${Math.random().toString(36)}_${file.fieldname}_${file.originalname}`
        cb(null, randomName)
    }
})

const fileFilter = (req, file, cb) => {
    console.log(file.mimetype)
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        return cb(new Error("Desteklenmeyen Dosya Biçimi"), false)
    }
}


const upload = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: process.env.FILE_MAX_SIZE } })
module.exports = upload