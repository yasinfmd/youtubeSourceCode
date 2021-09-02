let sayi = 29
let total = 0;

for (let index = 1; index < sayi; index++) {

    if (sayi % index === 0) {
        console.log("index", index)
        total += index
    }

}

if (total === sayi) {
    console.log("Mükemmel Bir Sayı")
} else {
    console.log("Normal Bir Sayı")

}