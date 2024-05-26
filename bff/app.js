///BFF Backend For Frontend
const express=require('express')

const app=express()

const data={
        id:1,
        name:"Abc",
        surname:"Def",
        age:30,
        country:'TR',
        phone:"7894328743",
        jobs:[1232,321,312,3,123,12]
}
app.use((req,res,next)=>{
    req.isMobile=!(/mobile/i.test(req.headers['user-agent']))
    next()

})
app.get('/getUser',(req,res,next)=>{
        if(req.isMobile){
            res.json({
                id:data.id,
                name:data.name,
                surname:data.surname
            })
        }else{
            console.log("1")
            res.json(data)
        }
})

app.listen(3003,()=>{
    console.log('Applciation Running prot 3003')
})