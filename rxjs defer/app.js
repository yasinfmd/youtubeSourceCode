import { BehaviorSubject, defer, of, } from "rxjs";

const obseravable1 = new BehaviorSubject(new Date())

const obseravable2 = defer(() => of(new Date()))

setTimeout(() => {
    obseravable1.subscribe((first) =>
        console.log("first", first))

    obseravable2.subscribe((second) =>
        console.log("second", second))
}, 5000)
