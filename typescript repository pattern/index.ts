class User{
    name:string
    id:string
    constructor(name:string,id:string){
        this.name=name
        this.id=id
    }
}

interface IBaseRepository<T>{
    create(item:T):Promise<boolean>
    update(id:string|number,item:T):Promise<boolean>
    delete(id:string|number):Promise<boolean>
    findById(id:string|number):Promise<T>
    findAll():Promise<Array<T>>
}

abstract class BaseRepository<T> implements IBaseRepository<T> {
    create(item: T): Promise<boolean> {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                    resolve(true)
            },3000)
        })
    }
    update(id: string | number, item: T): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
    delete(id: string | number): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
    findById(id: string | number): Promise<T> {
        throw new Error("Method not implemented.")
    }
    findAll(): Promise<T[]> {
        throw new Error("Method not implemented.")
    }
    
}

class UserRepository extends BaseRepository<User>{
    create(item: User): Promise<boolean> {
        return super.create(item)
    }
    getUsersCount():Promise<number>{
        return new Promise((resolve)=>{
            resolve(100)
        })
    }
}
const userRepo=new UserRepository()
userRepo.create({id:"1",name:"Ahmet"}).then((res)=>{
    console.log('res',res)
})
userRepo.getUsersCount().then((x)=>{
    console.log(x)
})