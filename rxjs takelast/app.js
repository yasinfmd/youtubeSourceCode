import { interval, range } from "rxjs";
import { takeLast } from "rxjs/operators"

const obs = range(1, 100)

obs.pipe(takeLast(10)).subscribe((x) => {
    console.log(`x`, x)
})