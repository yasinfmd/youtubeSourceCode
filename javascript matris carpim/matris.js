const data = [
    [50, 22, 38],
    [44, 57, 6],
    [70, 81, 93]
]
console.log(data.length)

let solCarpim = 1;
let sagCarpim = 1;
let total = 0;

for (let index = 0; index < data.length; index++) {
    solCarpim *= data[index][index]
    sagCarpim *= data[index][data.length - (index + 1)]

}
total = solCarpim + sagCarpim

//151.620
console.log("Matris Çarpımının Toplamı = " + total)
