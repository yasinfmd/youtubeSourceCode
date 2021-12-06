import { Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs"


const subject = new Subject()

subject.subscribe((res) => {
    console.log("Birinci Subscriber" + " " + res)
})

subject.subscribe((res) => {
    console.log("İkinci Subscriber" + " " + res)
})

subject.next("Veri 1")
subject.next("Veri 2")
subject.subscribe((res) => {
    console.log("Üçüncü Subscriber" + " " + res)
})
subject.next("Veri 3")

subject.next("Veri 4")

console.log("-------------------------")

const behaviorSubject = new BehaviorSubject("1")

behaviorSubject.subscribe((res) => {
    console.log("Birinci Subscriber" + " " + res)
})

behaviorSubject.subscribe((res) => {
    console.log("İkinci Subscriber" + " " + res)
})

behaviorSubject.next("Veri 1")
behaviorSubject.next("Veri 2")
behaviorSubject.subscribe((res) => {
    console.log("Üçüncü Subscriber" + " " + res)
})
behaviorSubject.next("Veri 3")

behaviorSubject.next("Veri 4")

console.log("-------------------------")

const replaySubject = new ReplaySubject(10, 1000)

replaySubject.subscribe((res) => {
    console.log("Birinci Subscriber" + " " + res)
})

replaySubject.subscribe((res) => {
    console.log("İkinci Subscriber" + " " + res)
})

replaySubject.next("Veri 1")
replaySubject.next("Veri 2")
replaySubject.subscribe((res) => {
    console.log("Üçüncü Subscriber" + " " + res)
})
replaySubject.next("Veri 3")

replaySubject.next("Veri 4")

console.log("+++++++++++++++++++++")

const asyncSubject = new AsyncSubject()

asyncSubject.subscribe((res) => {
    console.log("Birinci Subscriber" + " " + res)
})

asyncSubject.subscribe((res) => {
    console.log("İkinci Subscriber" + " " + res)
})

asyncSubject.next("Veri 1")
asyncSubject.next("Veri 2")
asyncSubject.subscribe((res) => {
    console.log("Üçüncü Subscriber" + " " + res)
})
asyncSubject.next("Veri 3")
asyncSubject.complete()
asyncSubject.next("Veri 4")


const observer = new Observable(x => {
    x.next(1)
    x.next(2)
    x.next("Yasin")
    setTimeout(() => {
        x.next("Dalkılıç")
        x.complete()
    }, 3000)
    x.next("Merhaba Dünya")

})


observer.subscribe({
    next: (response) => {
        console.log("res", response)
    },
    error: (e) => {
        console.log("e", e)
    },
    complete: () => {
        console.log("akış biterrr")
    }
})