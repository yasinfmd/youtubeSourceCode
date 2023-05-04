const express=require('express')
const app=express()
const monitoring=require('appmetrics-dash')
monitoring.monitor({port:3010})



app.get('/myapi',(req,res)=>{
    const arr=[]
    for (let index = 0; index <5; index++) {
        arr.push({id:index , time:Date.now()})        
    }
    res.json(arr)
})

app.listen(5000,()=>{
    console.log('running on port 5000')
})