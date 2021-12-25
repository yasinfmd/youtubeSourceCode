import { filter } from "rxjs/operators"

import { of } from "rxjs"

const obs = of(50, 60, 10, 20, 300, 857, 45, 758, 57, 25)
const obs2 = of({ ad: "1", yas: 3 }, { ad: "2", yas: 5 }, { ad: 3, yas: 30 })
obs.pipe(filter(x => x > 50)).subscribe((t) => {
    console.log("x>50", t)
})

obs2.pipe(filter(x => x.yas > 4)).subscribe((x) => {
    console.log("x.yas>2", x)
})