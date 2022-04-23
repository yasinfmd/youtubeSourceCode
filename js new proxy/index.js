const user = {
    ad: 'yasin',
    soyad: 'dalkılıç'
}
const proxyObj = new Proxy(user, {
    get(target, prop, r) {
        if (prop === "ad") {
            return target[prop].toUpperCase()
        }
        return target[prop]
    },
    has(target, key) {
        return key in target
    },
    deleteProperty(target, prop) {
        if (prop in target) {
            if (target[prop] === "") {
                delete target[prop]
            }
        } else {
            throw new Error('Objede böyle bir değer yok')
        }
    },
    set(obj, prop, val) {
        console.log('obj', obj)
        console.log('prop', prop)
        console.log('val', val)
        if (prop === "age") {
            if (!Number.isInteger(val)) {
                throw new Error('hataaaa')
            } else {
                if (val < 18) {
                    throw new Error('Yaş 18 den kucuk')
                }
            }
        }
        obj[prop] = val
        return true
    }
})

console.log(proxyObj.ad, proxyObj.soyad)
console.log('s' in proxyObj)
proxyObj.age = 22
delete proxyObj.ad
console.log(proxyObj)
proxyObj.ad = ""
delete proxyObj.ad
console.log(proxyObj)