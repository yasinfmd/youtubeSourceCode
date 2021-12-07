const express=require("express")

const router=express.Router()

router.get("/getAll",(req,res)=>{
    res.send("Users")
})
router.get("/getById/:userId",(req,res)=>{
    res.send("Users With Id")

})

module.exports={
    users:router
}
