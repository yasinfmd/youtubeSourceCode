import { of } from "rxjs"

import { single } from "rxjs/operators"

const obs = of({ ad: "Yasin" }, { ad: "Ali" }, { ad: "Mehmet" })


obs.pipe(single(x => x.ad.startsWith("Y"))).subscribe((y) => {
    console.log("y", y)
})


const obs2 = of({ ad: "Yasin" }, { ad: "Ali" }, { ad: "Mehmet" }, { ad: "Yusuf" })


obs2.pipe(single(x => x.ad.startsWith("Y"))).subscribe((y) => {
    console.log("y", y)
})

const obs3 = of({ ad: "tYasin" }, { ad: "Ali" }, { ad: "Mehmet" }, { ad: "fYusuf" })


obs3.pipe(single(x => x.ad.startsWith("Y"))).subscribe((y) => {
    console.log("y", y)
})