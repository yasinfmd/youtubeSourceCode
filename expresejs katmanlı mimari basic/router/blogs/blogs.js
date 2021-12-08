const express = require("express")
const router = express.Router()
const blogsController = require('../../controllers/blogs/blogsController')


router.get("/getAll", blogsController.getAll)
router.get("/getById/:blogId", blogsController.getById)

module.exports = {
    blogs: router
}
