const redis=require('redis')
const client=redis.createClient({port:6375});

const redisKey="Key1";
const redisKey2="Key2";
const redisKey3="Key3";
const redisKey4="Key4";
client.on('error',function(error){
    console.log('hata oluştu ',error)
})
client.set(redisKey,'Yasin')
client.set(redisKey2,100)

client.get(redisKey2,function(err,result){
    console.log('err',err)
    console.log('result',result)
})
client.get(redisKey,function(err,result){
    console.log('err',err)
    console.log('result',result)
})
client.get(redisKey3,function(err,result){
    console.log('error',err)
    console.log('result',result)
    if(result===null){
        client.set(redisKey3,"Merhaba")
    }
})

const peopleArray=[
    {
        name:"Yasin",
        lastname:"Dalkılıç",
        id:1
    },
    {
        name:"Selin",
        lastname:"Dalkılıç",
        id:2
    }
]
client.setex(redisKey4,20,JSON.stringify(peopleArray))

client.del(redisKey3)
client.del(redisKey)