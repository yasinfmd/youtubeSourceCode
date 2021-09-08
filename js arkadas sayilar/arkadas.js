const number1 = 17296
const number2 = 18416

let total1 = 0
let total2 = 0


const isFriend = (s1, s2) => {
    for (let index = 0; index < s1; index++) {
        if (number1 % index === 0) {
            total1 += index
        }
    }
    for (let index = 0; index < s2; index++) {
        if (number2 % index === 0) {
            total2 += index
        }
    }

    return (total1 === s2 && total2 === s1) ? "Arkadaş Sayılar" : "Arkadaş Değiliz"
}


console.log(isFriend(number1, number2))