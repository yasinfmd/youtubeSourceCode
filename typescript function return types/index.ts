const getNumber = ():number => {
    return 10;
}
console.log("getNumber", getNumber())


const getString = (): string => {
    return "Yasin"
}

console.log("getString", getString())


const getBoool = (): boolean => {
    return true
}

console.log("getBoool", getBoool())


const getObject = (): { name: string, age: number } => {
    return {age:20,name:"yasin"}
}

console.log("getObject", getObject())

const getArray = (): Array<any> => {
    return [1,3,"Yasin",true,{ad:"yasin"}]
}

console.log("getArray", getArray())

const getNumberArray = (): Array<number> => {
    return [1,3]
}
console.log("getNumberArray", getNumberArray())

const getNumberObjects = (): Array<{name:string,age:number}> => {
    return [{name:"test",age:20}]
}
console.log("getNumberArray", getNumberObjects())


const getPromise = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Text")
        },2000)
    })
}
getPromise().then((value) => {
    console.log("val", value)
    
})

