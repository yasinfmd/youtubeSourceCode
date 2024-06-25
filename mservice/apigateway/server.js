const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app=express()
const PORT=3000

app.use('/x-service',createProxyMiddleware({
    target:'http://localhost:3001',
    changeOrigin:true,
    headers:{

    },
    on:{
        error:(err,req,res)=>{
                    console.log('err', err)
                    res.send("Hata")
        }
    }
}))
app.use('/y-service',createProxyMiddleware({
    target:'http://localhost:3002',
    changeOrigin:true
}))


app.listen(PORT,()=>{
    console.log(`Application running on port ${PORT}`)
})