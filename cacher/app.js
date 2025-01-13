const MAX_SIZE=20
class Cacher{
    constructor(maxSize=MAX_SIZE){
        this.maxSize=maxSize
        this.cache=new Map()
    }
    set(key,value,ttl){
        if(this.cache.size>=this.maxSize){
            const oldKey=this.cache.keys().next().value
            this.cache.delete(oldKey)
        }
        const expiredAt=ttl?Date.now()+ttl:null
        this.cache.set(key,{value,expiredAt})
    }
    get(key){
        const cachedItem=this.cache.get(key)
        if(!cachedItem)return null
        if(cachedItem.expiredAt && cachedItem.expiredAt<Date.now()){
            this.cache.delete(key)
            return null
        }
        return cachedItem.value
    }
    delete(key){
        this.cache.delete(key)
    }
    clear(){
        this.cache.clear()
    }
    logCache(){
        console.log(this.cache)
    }
}

const cacher=new Cacher(3)
cacher.set("user1",{id:1,name:'user1'},1000*10)
cacher.set('user2',{id:10,name:'user2'},1000*10)
cacher.set("posts",[1,2,3],1000*5)

setInterval(()=>{
    console.log(cacher.get('user1'))
    cacher.logCache()
},1000)