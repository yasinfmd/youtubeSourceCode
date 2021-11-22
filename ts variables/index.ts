let myname:string = "Yasin"

myname = "Can"

console.log(myname)

let _number:number = 100;

number = 200;
console.log(number)



let isActive:boolean = true;

_isActive = true
_isActive = false
console.log(_isActive)


let unknow:any;
unknow = "yasin"
unknow = 5;


let myArray: Array<number> = []
myArray.push(2)
myArray.push(50)
myArray.push(200)

let otherArray: Array<string> = []

otherArray.push("5", "Yasin")


let boolArray: Array<boolean> = [true, false]

let _myObj:{name:string,age:number} = {age:25,name:"Yasin"}

_myObj.age = 30

let objArray: Array<{ name: string, age: number , lastname?:string , isActive?:boolean}> = []
objArray.push({ name: "yasin", age: 20, lastname: "dalkılıç" })

console.log(objArray[0].age)
console.log(objArray[0].name)
console.log(objArray[0].lastname)
console.log(objArray[0].isActive)




console.log(unknow)