import { makeAutoObservable } from "mobx";

export const storeWithObject=makeAutoObservable({
    // observable
    users:[],
    get count(){
        return storeWithObject.users.length
    },
    addUser(data){
        console.log('store',storeWithObject)
        storeWithObject.users.push(data)

    },
    getUsers(){
            return  storeWithObject.users
    }
})