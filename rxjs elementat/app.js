import { elementAt } from "rxjs/operators";
import { fromEvent } from "rxjs";

const obs = fromEvent(document, "click")

obs.pipe(elementAt(2)).subscribe((x) => {
    console.log("x", x)
})
