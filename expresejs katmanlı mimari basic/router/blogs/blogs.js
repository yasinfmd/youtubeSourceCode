const express = require("express")
const router = express.Router()
const blogsController = require('../../controllers/blogs/blogsController')


//auth middleware validation middleware file middleware !!! 

router.get("/getAll", blogsController.getAll)
router.get("/getById/:blogId", blogsController.getById)
router.post("/create", blogsController.create)


module.exports = {
    blogs: router
}
