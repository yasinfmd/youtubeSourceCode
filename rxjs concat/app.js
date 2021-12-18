import { concat, of } from "rxjs";

const data1 = of(1, "Yasin", "Ali")
const data2 = of(10, "Yasin", 100)
const data3 = of(1, "Yasin", [44])
const data4 = of("Hello", "World", ":)")

const concated = concat(data1, data2, data4, data3)


concated.subscribe((x) => {
    console.log("x", x)
})