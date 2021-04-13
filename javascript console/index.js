

console.table(['Kayıt 1', 'Kayıt2', 'Kayıt 3'])
console.table({ ad: 'Yasin', soyad: 'Dalkılıç' })
const arr = [{ ad: 'yasin', soyad: 'dalkılıç' }, { ad: 'selin', soyad: 'dalkılıç' }]
console.table(arr)


console.log('Bu Bir Log')
console.group('Veri tabanı loglaroı')
console.log(' 1')
console.log(' 2')
console.log(' 3')
console.groupEnd()
console.log('Selam')

console.error(arr)
console.error({ ad: 'Hata ', no: 'Hata 1' })
console.error('Hata Var')

console.warn('Deneme')

console.time('for')
for (let index = 0; index < 500000; index++) {

}

console.timeEnd('for')

console.time('for2')
for (let index = 0; index < 5000000; index++) {

}

console.timeEnd('for2')