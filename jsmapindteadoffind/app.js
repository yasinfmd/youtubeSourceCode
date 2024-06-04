const data=[
    {
        id:1,
        name:'qwerrwerwer',
        surname:"dfgdfg",
        age:3333,
        phone:543534534,
        adress:'wrwejkrwekljr'
    },
    {id:2,
        name:"qweqwe",
        surname:"dfjklgkjdfg",
        age:3333,
        phone:543534534,
        adress:'wrwejkrwekljr'
    }
]
const myData=new Map()
for (let index = 0; index < data.length; index++) {
        myData.set(data[index].id,data[index])
}
console.log(myData)

const searchId=1;
// O(n)
const findItem=data.find((item)=>item.id===searchId)
console.log(findItem)
// O(1)
const findItemWithMap=myData.get(searchId)
console.log(findItemWithMap)
myData.has(searchId)
// 1 kaydı memory de abc
// 2 kaydı memorde def