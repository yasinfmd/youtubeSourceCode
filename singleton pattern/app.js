class Singleton{
    data;
    constructor(){
        if(Singleton.instance){
            return Singleton.instance
        }
        Singleton.instance=this;
        return this
    }

    getData(){
        return this.data;
    }

    setData(data){
        this.data=data
    }
}
const instance1=new Singleton()
const instance2=new Singleton()
instance1.setData("Merhaba")
console.log(instance1.getData())

console.log(instance2.getData())


class NotSingleton{
    data;
    getData(){
        return this.data
    }
    setData(d){
        this.data=d
    }
}

const instance10=new NotSingleton()
const instance20=new NotSingleton()
instance10.setData("Merhaba 111")
console.log(instance10.getData())

console.log(instance20.getData())