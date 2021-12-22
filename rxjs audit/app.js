import { audit, interval } from "rxjs";

const obs = interval(500)

// obs.subscribe((x) => {
//     console.log("x", x)
// })

const newObs = obs.pipe(audit(x => interval(2000)))
newObs.subscribe((t) => {
    console.log("t", t)
})