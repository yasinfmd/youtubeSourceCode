const express = require("express")
const router = express.Router()
const userController = require('../../controllers/user/userController')
const upload = require('../../middleware/imageUpload')
router.get("/getAll", userController.getAll)
router.get("/getById/:userId", userController.getById)
router.put("/updateById/:userId", userController.updateById)
router.post("/findByEmail", userController.findByEmail)
router.post("/create", [upload.single("photo")], userController.create)
router.get("/findByName", userController.findByName)
router.post("/updateProfilePhoto", [upload.single("photo")], userController.updateProfilePicture)
module.exports = {
    users: router
}
