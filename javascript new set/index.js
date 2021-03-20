const Set1 = new Set();

const kisiNesnem = { ad: 'ahmet' }
const kisiNesnesi2 = { ad: 'yasin' }

Set1.add(kisiNesnem)
Set1.add(kisiNesnesi2)
Set1.add(5)
Set1.add('yasin')
console.log(Set1)
Set1.delete(5)
Set1.delete({ ad: 'yasin' })
const isExist = Set1.has('20')
console.log(isExist)
console.log(Set1)
console.log(Set1.size)


Set1.forEach((item) => {
    console.log('item', item)
})
for (let item of Set1) {
    console.log('item2', item)
}

for (let item of Set1.keys()) {
    console.log('item3', item)
}
for (let item of Set1.values()) {
    console.log('item4', item)
}

for (let [key, value] of Set1.entries()) {
    console.log('item5', value)
}
const SetToArray = Array.from(Set1)
console.log(SetToArray)