function * sayHi(){
    yield "Hello"
    yield 30
    yield "Merhaba"

}

const generator=sayHi()

console.log(generator.next())
let x=generator.return("smndfmdnf")
console.log(x)
console.log(generator.next())

// try catch 
generator.throw("hatamata")
