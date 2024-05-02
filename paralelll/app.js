const Parallel=require('paralleljs')
const p=new Parallel([1,2,3],{
    maxWorkers:6
})
p.spawn((data)=>{
    console.log('main threadden ayrı bir threadde data',data)
    return data.reverse()
}).then((res)=>{
    console.log('res',res)
})
console.log('başka bir işlem')

const p2=new Parallel([1,2,35])
p2.spawn(function(data){
    let x=[...data]
    for (let index = 0; index < 50000000; index++) {
        x.push(index)
        
    }
    return x
}).then((r)=>{
    console.log('r', r)
})
const p3=new Parallel([11,22,33])
p3.map((item)=>item*100).then((r)=>{
    console.log('r', r)
})
function myfn(x){
    console.log(arguments,x)
}
p3.map((x)=>x*25).then(myfn)