const pubSub=require('./app')


pubSub.subscribe('myEventLoad',(data)=>{
    console.log('data',data)
})
pubSub.subscribe('customClick',(data)=>{
    console.log('data',data)
})