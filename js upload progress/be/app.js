const express=require('express')
const multer=require('multer')
const cors=require('cors')

const app=express()

app.use(cors())

const port=3000

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)

    }
})
const upload=multer({storage})
app.post('/upload',upload.single('file'),(req,res)=>{
    res.status(200).json({msg:'başarılı'})
})



app.listen(port,()=>{
    console.log('running on ' + port)
})