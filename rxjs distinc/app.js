import { of } from "rxjs"
import { distinct } from "rxjs/operators"


const obs = of(1, 2, 5, 5, 3, 2, 889, 545)

obs.pipe(distinct()).subscribe((x) => {
    console.log("x", x)
})

const obs2 = of(
    { ad: "yasin", age: 0 },
    { ad: "ali", age: 1 },
    { ad: "yasin", age: 2 }
)

obs2.pipe(distinct(x => x.ad)).subscribe((y) => {
    console.log("y", y)
})