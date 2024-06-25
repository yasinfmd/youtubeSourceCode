const express=require('express')
const config=require('config')

const PORT=5010
const app=express();


app.get('/config',(req,res)=>{
    res.json(config.get('xservice'))
})

app.listen(PORT,()=>{
    console.log(`Application running on port ${PORT}`)
})