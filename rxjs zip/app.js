import { of, zip } from "rxjs";


const obs1 = of("1", "2", 3, 20)
const obs2 = of("10", "20", 30, 45)
const obs3 = of("100", "200", 300, 500)


zip(obs1, obs2, obs3).subscribe((x) => {
    console.log("Değerler", x)
})