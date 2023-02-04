const obje={
    ad:'Yasin',
    soyad:'Dalkılıç',
    phones:{
        home:'05455',
        work:'5646545',
        personel:'234234'
    }
}

const objCopy=structuredClone(obje)
obje.ad="qwewqe"
obje.phones.home="11111"
console.log(objCopy)
console.log(obje)