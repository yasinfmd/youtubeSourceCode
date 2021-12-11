import { interval } from "rxjs";



const obs = interval(3000)
obs.subscribe((data) => {
    console.log("data", data)
})