import { fromEvent, interval } from "rxjs";

import { debounce } from "rxjs/operators";
const el = document.getElementById("inp")

const obs = fromEvent(el, "input")
obs.pipe(debounce(x => interval(100))).subscribe((x) => {
    console.log("x", x)
})