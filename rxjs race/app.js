import { race, interval, mapTo } from "rxjs";



const obs1 = interval(100).pipe(mapTo("Yasin"))
const obs2 = interval(1000).pipe(mapTo("Yasin 1"))
const obs3 = interval(3000).pipe(mapTo("Yasin 2"))


const raced = race(obs1, obs2, obs3)

raced.subscribe((x) => {
    console.log("ilk gelen kazanır :)", x)
})