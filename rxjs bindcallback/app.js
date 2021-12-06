import { bindCallback } from "rxjs"
import * as j from "jquery"

const obs = bindCallback(j.getJSON)
const result = obs("https://api.github.com/users")
result.subscribe((t) => {
    console.log("t", t)
})

const myCustomFunction = (cb) => {
    setTimeout(() => {
        cb(500)
    }, 3000)
}
const observerFunction = bindCallback(myCustomFunction)
observerFunction().subscribe((x) => {
    console.log("x", x)
})