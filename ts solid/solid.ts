// s
class Customer{
    name:string
    surname:string;
    constructor(name:string,surname:string){
        this.name=name
        this.surname=surname
    }
    getName(){
        return this.name
    }
    getsurName(){
        return this.surname
    }

    sayHello(){
        // Its about customers
    }
}

const c:Customer=new Customer("Yasin","Dalkılıç");

// o

abstract class Shape{
    abstract area():number
}

class Circle extends Shape{
    private radius:number;
    area(): number {
        throw new Error("Method not implemented.");
    }

}

class Rectangle extends Shape{
    private width:number;
    private height:number;
    area(): number {
        throw new Error("Method not implemented.");
    }

}

// l 

interface Bird{
    fly():string
}
interface Eat{
    eat():void
}
class Dog implements Eat{
    fly(): string {
        return ""
    }
    eat(): void {
        
    }

}
class Parrigot implements Bird, Eat{
    fly(): string {
      return "ucuyor"
    }
    eat(): void {
        
    }
}
var bird:Bird=new Dog()
bird.fly()


// i
interface Workers{
    work():void
    eat():void
}
class Engineer implements Workers{
    eat(): void {
        
    }
    work(): void {
        
    }
}

// d

interface MessageSender{
    send(msg:string):void
}

class EmailSender implements MessageSender{
    send(msg: string): void {
        console.log('msg',msg)
    }
}

class PhoneSender implements MessageSender{
    send(msg: string): void {
        
    }
}

class NotificationService{
    private messageSender:MessageSender

    constructor(messageSender:MessageSender) {
        this.messageSender=messageSender
    }
}
const emailSender=new EmailSender()

const phoneSender=new PhoneSender()

const ns=new NotificationService(phoneSender)