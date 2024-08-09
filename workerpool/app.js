const app=require('express')()
const workerpool = require('workerpool');

const pool=workerpool.pool('./worker.js',{})
app.get('/abc',(req,res)=>{
    res.send("Okey")
})

app.get('/def',(req,res)=>{
   
    console.log( pool.stats())
    pool.exec("handleCalculation").then((x)=>{
        console.log('res',x)
    res.send("handlecalculation")

    }).catch((err)=>{
        console.log(err)
    }).then(function () {
        pool.terminate(); // terminate all workers when done
      });
})

app.listen(3003,()=>{
    console.log('3003 çalısıyor')
})