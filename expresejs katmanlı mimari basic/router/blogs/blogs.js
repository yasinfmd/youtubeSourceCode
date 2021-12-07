const express=require("express")

const router=express.Router()

router.get("/getAll",(req,res)=>{
        res.send("Blogs")
})
router.get("/getById/:blogId",(req,res)=>{
    res.send("Blogs With Id")
})

module.exports={
    blogs:router
}
