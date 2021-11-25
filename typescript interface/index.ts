interface MyInterface{
    ad: string
    soyad: string
    readonly yas: number
    cinsiyet?: boolean
}

const data: MyInterface = { ad: "Yasin", soyad: "Dalkılıç", yas: 20, cinsiyet: true }
data.ad = "Ali"

const dataArray: Array<MyInterface> = [{ ad: "Yasin", soyad: "Dalkılıç", yas: 20, cinsiyet: true }]


interface MyCustomFunc{
    (ad:string,soyad:string):string
}

const getFullName: MyCustomFunc = (ad,soyad) => {
    return ad+soyad
}
getFullName("Yasin", "Dalkılıç")

interface Animal{
    name:string
}

interface Dog extends Animal{
    walk:string
}

const dog:Dog={name:"Dog",walk:"Walk"}