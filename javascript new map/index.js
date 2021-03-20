var Map1 = new Map();
for (let index = 0; index < 10; index++) {
    Map1.set(index, { date: Date.now(), id: index })
}
//console.log('Size', Map1.size)
//Map1.delete(3)
//console.log('Size', Map1.size)

//console.log(Map1.delete(5))
//console.log('Size', Map1.size)

//console.log(Map1.delete(30))
//console.log(Map1.values())

const isArray = Array.from(Map1.values())
const keyArray = Array.from(Map1.keys())
//console.log('valueArray', isArray)
//console.log('keyArray', keyArray)

//console.log('map', Map1)

// Map1.forEach((value, key) => {
//     console.log('value', value, 'key', key)
// })
// console.log('-------------------------------')
// for (let [key, value] of Map1) {
//     console.log('value', value, 'key', key)

// }
// console.log('-------------------------------')
// for (let key of Map1.keys()) {
//     console.log('key', key)

// }
// console.log('-------------------------------')
// for (let value of Map1.values()) {
//     console.log('value', value)

// }
for (let [key, value] of Map1.entries()) {
    console.log('itemKey', key)
    console.log('itemValue', value)

}