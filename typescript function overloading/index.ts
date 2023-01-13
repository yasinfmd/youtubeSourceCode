function sayHello(text:string):string
function sayHello(text:string,customText:string):string
function sayHello(text:string,customText?:string){
    if(customText){
           return customText + " " + sayHello 
    }
    return text
}

console.log(sayHello("Merhaba"))
console.log(sayHello('Yasin','Merhaba'))