import { forkJoin, of } from "rxjs";

const data1 = of(1, "Yasin", "Ali")
const data2 = of(10, "Yasin", 100)
const data3 = of(1, "Yasin", [44])
const data4 = of("Hello", "World", ":)")

const forkedData = forkJoin(data1, data2, data3, data4)

forkedData.subscribe((x) => {
    console.log("X", x)
})