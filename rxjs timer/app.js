import { timer } from "rxjs"



timer(5000).subscribe(() => {
    console.log("5 saniye sonra bu iş yapılacak")
})