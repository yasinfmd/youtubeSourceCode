import { iif, of, timer } from "rxjs";


let isActive = false

const obsIIF = iif(() => isActive, of("Yasin"), of("Dalkılıç"))


timer(3000).subscribe((x) => {
    isActive = true
    obsIIF.subscribe((item) => {
        console.log("true", item)
    })

})


isActive = false

obsIIF.subscribe((item) => {
    console.log("false", item)
})
