function getData<Type>(params:Type) : Type {
    return params
}

const value = getData<string>("1")
const value2 = getData<number>(1)
const value3 = getData<boolean>(true)
const value4 = getData<Array<string>>(["asdsa", "sadasd"])

class GenericTest<Type>{
    value:Type
}

console.log(`value`, value)
console.log(`value2`, value2)
console.log(`value3`, value3)
console.log(`value4`, value4)

const _cls = new GenericTest<string>();
_cls.value = "Yasin"
console.log(_cls.value)
