import { of, groupBy } from "rxjs";


const obsData = of({
    id: 1,
    ad: "test"
}, {
    id: 3,
    ad: "ali"
}, {
    id: 2,
    ad: "abc"
}, {
    id: 1,
    ad: "hey"
}, {
    id: 3,
    ad: "zzz"
})
obsData.pipe(groupBy(x => x.id)).subscribe((_id) => {
    _id.subscribe((data) => {
        console.log(_id.key, data)
    })
})