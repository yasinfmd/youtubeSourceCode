class Car{
    name: string;

    constructor(name: string) {
        this.name=name
    }

    getName():string {
        return this.name
    }
}
class MyPrivateExample{
    //private name: string;
    #name: string;
    public lastname: string;
    get MyName():string {
        return this.#name;
    }
    set CustomMyName(name: string) {
        this.#name = name;
    }

}
class StaticClassExample{
    static data: string = "Yasin"
    static myMethod() {
        console.log("Selam")
    }
}

abstract class MyAbstractClassExample{
    abstract play(): void;
}

class TestClass extends MyAbstractClassExample{
    play(): void {
        console.log("İmplements Edildi")
    }
    
}
class Animal{
    name: string;

    eat() {
        console.log("animal eat")
    }
}
class Dog extends Animal{
    walk() {
        super.eat()
    }
}
const dog = new Dog()
dog.walk()
const testAbstract = new TestClass()
testAbstract.play()
console.log(StaticClassExample.data)
StaticClassExample.myMethod()
const private = new MyPrivateExample()
private.CustomMyName = "Yeni Ad"
console.log(private.MyName)
const car: Car = new Car("Audi")
console.log(car.getName())