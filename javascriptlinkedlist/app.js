class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
  /*  next(){
        return this.next
    }*/
}

class LinkedList{
    constructor(){
        this.head=null 
    }
    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=newNode
    }

    print(){
        let current=this.head
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
}


const list=new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)

list.print()
