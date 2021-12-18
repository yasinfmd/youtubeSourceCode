import { partition, of } from "rxjs";



const datas = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
const [arr1, arr2] = partition(datas, x => x > 7)


arr1.subscribe((t) => {
    console.log("dogru", t)
})

arr2.subscribe((f) => {
    console.log("yanlış", f)
})