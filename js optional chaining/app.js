const obje = {
    ad: "yasin",
    soyad: "dalkılıç",
    yas: 25,
    gender: () => {
        return "E"
    },
    phones: [{
        cep: 0555555
    }]
}
if (obje && obje.phones && obje.phones[0] && obje.phones[0].cep) {
    //! TODO
}
if (obje?.phones?.[0]?.cep) {
    // ! TODO 
}
console.log(`object`, obje.phones?.[0]?.cep)
console.log(`object`, obje.gender?.())