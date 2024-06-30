
class User{
    constructor(builder) {
        this.firstname=builder.firstname
        this.lastname=builder.lastname
        this.age=builder.age
        this.phone=builder.phone
        this.addres=builder.addres

    }
    getFirstName(){
        return this.firstname
    }
    getLastName(){
        return this.lastname
    }

    static builder(ad,soyad){
        return new UserBuilder(ad,soyad)
    }
}

class UserBuilder{
    constructor(ad,soyad){
        this.firstname=ad
        this.lastname=soyad
    }
    age(age){
        this.age=age
        return this
    }
    phone(phone){
        this.phone=phone
        return this

    }
    addres(address){
        this.addres=address
        return this
    }

    build(){
        const user=new User(this)
        return user
    }
    
}

const userWithBuilder=
        User.builder("Yasin","Dalkılıç").
            age(30).
            phone(54564).
            addres("Adres").
        build()
console.log(userWithBuilder)