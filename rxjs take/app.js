import { interval } from "rxjs";
import { take } from "rxjs/operators"

const obs = interval(200)
obs.pipe(take(20)).subscribe((x) => {
    console.log(`x`, x)
})