const express=require('express')

const app=express()


const PORT=3002
app.get('/',(req,res)=>{
    res.json({txt:"Msg coming from Y Service"}).status(200)
})

app.listen(PORT,()=>{
    console.log(`Application running on port ${PORT}`)
})