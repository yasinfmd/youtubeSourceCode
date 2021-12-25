import { first, last } from "rxjs/operators"

import { of } from "rxjs"

const obs = of(50, 60, 10, 20, 300, 857, 45, 758, 57, 25)

obs.pipe(first()).subscribe((x) => {
    console.log("x", x)
})

obs.pipe(last()).subscribe((l) => {
    console.log("l", l)
})