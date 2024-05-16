const {exec}=require('child_process')
const path=require('path')

const javaFilePath=path.join(__dirname,'HelloWorld.java')
const classFilePath=path.join(__dirname,'HelloWorld.class')
exec(`javac ${javaFilePath}`,(error,stdout,stderr)=>{
    if(error){
        console.log('Hata compile',stderr)
    }
    if(stderr){
        console.log('Hata compile',stderr)
    }
    exec(`java -cp ${__dirname} HelloWorld`,(err,stdout,stderr)=>{
        if(err){
                console.log('Err execute', err)
        }

        console.log(stdout)
    })
})