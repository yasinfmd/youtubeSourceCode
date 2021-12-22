import { of, interval, audit } from "rxjs"
import { filter, map } from "rxjs/operators"

const obs = of(1, 2, 435, 34, 76, 57, 32, 20, 30, 11)

obs.pipe(filter(d => d > 50), map(x => x / 500)).subscribe((t) => {
    console.log("t", t)
})