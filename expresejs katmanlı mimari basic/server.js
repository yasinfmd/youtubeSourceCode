const express=require("express")
const app=express()
const routes=require('./router/router')
const PORT=process.env.PORT || 5000
const API_PREFIX="/api/v1/"


app.use(`${API_PREFIX}user`,routes.user)
app.use(`${API_PREFIX}blog`,routes.blog)



app.listen(PORT,()=>{
    console.log("Server Running" + " " + PORT)
})

