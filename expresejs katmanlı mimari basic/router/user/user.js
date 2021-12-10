const express = require("express")
const router = express.Router()
const userController = require('../../controllers/user/userController')
const upload = require('../../middleware/imageUpload')
router.get("/getAll", userController.getAll)
router.get("/getById/:userId", userController.getById)
router.post("/create/", [upload.single("photo")], userController.create)


module.exports = {
    users: router
}
