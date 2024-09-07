const eq=require('fast-deep-equal')

const obje={
    ad:"Yasin",
    soyad:'D'
}

const obje2={
    ad:'Yasin',
    soyad:'D'
}
console.log(obje==obje2)

console.log(eq(obje,obje2))
const map=new Map()
map.set(1,"Yasin")
const map2=new Map()
map.set(2,"Selam")
console.log(eq(map,map2))
const a=new Int16Array([1, 2])
const b=new Int16Array([1, 2])
const arr=[1,2,3]
const arr2=[1,2,3]
console.log(eq(arr,arr2))
console.log(eq(a,b));
