const express=require('express')
const rateLimit=require('express-rate-limit')
const app=express()


const generalLimit=rateLimit({
  windowMs:60*1000,
  max:5,
  message:'Fazla istek var'
})

const port=3000

const list=[
  {
    id:1,
    ad:'123213'
  },  {
    id:2,
    ad:'sdfsd'
  },  {
    id:3,
    ad:'qweqwe'
  }
]
app.use(generalLimit)
app.get('/list',(req,res)=>{
  res.json(list)
})
const myListLimit=rateLimit(
  {
    windowMs:60*1000,
    max:2,
    message:'Çok fazla istek atıyorsun yapma',
    handler:function(req,res,next){
      res.status(429).send("Kardeşim çok hızlı gidiyortsun")
    }
  }
)
app.get('/mylist',myListLimit,(req,res)=>{
  res.json(list)
})


app.listen(port,()=>{
  console.log('running')
})