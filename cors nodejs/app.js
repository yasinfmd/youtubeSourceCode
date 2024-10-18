const express=require('express')

const cors=require('cors')

const app=express()
const port=5050

app.use(cors({
        allowedHeaders:['Content-Type'],
        origin:['http://localhost:3000','http://www.myabcwebapp.com'],
        methods:['GET','POST','PUT','DELETE'],
        optionsSuccessStatus:200,
        credentials:true,
}))

app.use(express.json())



app.listen(port,()=>{
    console.log('running on port' + port)
})