import { from } from "rxjs";


const array = [{ id: 1 }, { id: 2 }, { id: 3 }, "yasin", 20]

array.push("ali")


setTimeout(() => {
    array.push("Yeni Eleman")
    console.log("arr", array)
}, 2000)
const result = from(array)


result.subscribe((x) => {
    console.log("x", x)
})
console.log(array)