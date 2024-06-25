const express=require('express')
const axios=require('axios')
const app=express()


const PORT=3001

let config={
    port:PORT
}
const getConfig=async()=>{
    const response=await axios.get("http://localhost:5010/config")
    console.log(response.data)
    config.port=response.data.port
}
app.get('/',(req,res)=>{
    res.json({txt:"Msg coming from X Service"}).status(200)
})


const startServer=async()=>{
    await getConfig()
    app.listen(config.port,()=>{
        console.log(`Application running on port ${config.port}`)
    })
}
startServer()