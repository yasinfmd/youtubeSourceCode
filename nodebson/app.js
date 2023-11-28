const BSON=require('bson')

const data={
    name:"Ahmet",
    age:30,
    surname:"Kavaklı"
}

const bsonData=BSON.serialize(data)
console.log('bsonData',bsonData)


console.log(BSON.deserialize(bsonData))