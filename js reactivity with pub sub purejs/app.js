const pubSub={
    events:{},
    subscribe(event,callback){
            if(!this.events[event])this.events[event]=[]
            this.events[event].push(callback)
    },
    publish(event,data){
        if(this.events[event]){
             this.events[event].forEach((cb)=>cb(data))
        }
    }
}

setTimeout(() => {
    pubSub.publish('myEventLoad',"My Event Load publish edildiii")

}, 100);



pubSub.subscribe('myEventLoad',(data)=>{
    console.log('data',data)
})

setTimeout(() => {
pubSub.publish('customClick','click 1')
    
}, 2000);

setTimeout(() => {
    pubSub.publish('customClick','click 2')
        
    }, 4000);
    
setTimeout(() => {
    pubSub.publish('customClick','click 3')
        
    }, 6000);

module.exports=pubSub