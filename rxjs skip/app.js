import { interval } from "rxjs";
import { skip } from "rxjs/operators";

const obs = interval(1000)
obs.pipe(skip(5)).subscribe((x) => {
    console.log(`x`, x)
})