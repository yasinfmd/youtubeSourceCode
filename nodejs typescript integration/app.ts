import express from 'express'

const app=express();

interface User{
    id:number
    ad:string
}
app.get('/',(req,res)=>{
    const data:User={
        ad:"Yasin",
        id:10
    }
   res.json(data)
})

app.listen(3000,()=>{
    console.log("Application running on PORT 3000")
})