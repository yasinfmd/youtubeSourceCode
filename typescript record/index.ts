interface Info{
    age:number
    name:string
}
type onlyMyNames='yasin'|'ahmet'
const persons:Record<onlyMyNames,Info>={
    yasin:{
        age:33,
        name:"qqq"
    },
    ahmet:{
        age:333,
        name:"qweqwewq"
    }
}