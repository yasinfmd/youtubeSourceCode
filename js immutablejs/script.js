var obj1=Immutable.Map({ad:'aaa',soyad:'bbb'})
var obj2=obj1.set('soyad','ccc')
console.log(obj1,obj2)
console.log(obj1.get('soyad'),obj2.get('soyad'))

console.log(obj1===obj2)



var obj3=Immutable.Map({ad:'yasin',soyad:'dalkılıç'})
var obj4=Immutable.Map({soyad:'dalkılıç', ad:'yasin'})
console.log(obj3.equals(obj4))

console.log(obj3===obj4)

const x=Immutable.List([1,2,3])
console.log(x)
const t=x.push(10)
console.log(t)
console.log(x)
console.log(x.size)
x.forEach((el,i) => {
    console.log(x.get(i))
});

