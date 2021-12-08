import { first, fromEvent } from "rxjs";

const el = document.getElementById("myBtn")


fromEvent(el, "click").pipe(first()).subscribe((x) => {
    console.log("x", x)
})