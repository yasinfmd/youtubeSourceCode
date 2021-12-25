import { of } from "rxjs";
import { skipLast } from "rxjs/operators";

const obs = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

obs.pipe(skipLast(5)).subscribe((x) => {
    console.log(`x`, x)
})