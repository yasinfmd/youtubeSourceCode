import socketClient from 'socket.io-client'
let otherUser;
let socket
let fileShare={}
let _chunk
let _buffer
let _metadata
export const CreateConnection=()=>{
    socket=socketClient('http://localhost:5000')

    socket.on('connection',()=>{
        console.log('socketid',socket.id)
        window.mySocketId=socket.id
    })
    //dosyayı gönderen
    socket.on('sender',(data)=>{
        console.log('data',data)
        window.senderSocketId=data.senderId
    })

    //diğer istemciye dosya üst başlıgını gönder
    socket.on('send-file-meta-data',(data)=>{
        console.log(data)
        fileShare.metadata=data.metadata
        fileShare.transmitted=0
        fileShare.buffer=[]
        //veri alacağımı biliyorum artık transfer başlasın
        //dosyayı gönderecek istemciye hadi dosyayı gönder
        socket.emit('start-file-transfer',{
            to:data.from
        })
    })
    //dosya gönderme işlemini başlat
    socket.on('start-file-transfer',(data)=>{
        console.log('durum',data)
        fileTransfer()

    })

    socket.on('incoming-file',(data)=>{
        //dosya parçası geldi 1024 lük kısım
        //sen bunu array içerisine gönder
        //ve transfer edilen dosya miktarını arttır
        //1024 bytlelength

        // 1024 1024 2048 ...... 10mb
        fileShare.buffer.push(data.buffer)
        fileShare.transmitted+=data.buffer.byteLength
        console.log(fileShare.transmitted)
        console.log(fileShare.metadata)
        console.log(fileShare.buffer)

        if(fileShare.transmitted == fileShare.metadata.total_buffer_size){
            const f= new File(fileShare.buffer, fileShare.metadata.filename, { lastModified: new Date().getTime(), type: 'image/jpg' })
            console.log('file',f)
            const blob=new Blob(fileShare.buffer,{type:'image/jpg'})
            const a = document.createElement('a');
            document.body.appendChild(a);
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = fileShare.metadata.filename;
            a.click();
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }, 0)
            console.log('(new Blob(fileShare.buffer)',(new Blob(fileShare.buffer)))
            fileShare={}
        }else{
            //dosya aktarımı devam ediyo
            socket.emit('start-file-transfer',{
                to:data.from
            })
        }
    })

}

export const fileTransfer=()=>{
    //0 dan 1024 e kadar veriyui al
    //bu kucuk parçayı gönder 10mb 1024 1024 1024
    _chunk=_buffer.slice(0,_metadata.buffer_size)
    _buffer=_buffer.slice(_metadata.buffer_size,_buffer.length)
    //10mb dan 1024 ü çıkar
    //veri varsa 1024 lük dilim varsa
    if(_chunk.length!=0){
        console.log('c',_chunk)
        //dosyayı chunk chunk gönder

        //diğer istemciye to !
        //şu veri parçasını buffer !
        //kimden geliyo bu veri from benim socket id yani gönderenin !
        socket.emit('sending-file',{
            to:otherUser,
            buffer:_chunk,
            from:window.mySocketId
        })
    }
}
//dosyaya ait meta bilgisi kaç mb dosya adı ne vb !
export const sendUserFile=(metadata,buffer,otherSocketId)=>{
    _metadata=metadata
    _buffer=buffer
    console.log('metada',metadata)
    console.log('buffer',buffer)
    socket.emit('send-file-meta-data',{
        from:window.mySocketId,
        metadata,
        to:otherSocketId
    })
}
export const shareFile=(file,otherSocketId)=>{
    //dosyayı kucuk kucuk göndermek için buffer olustur !
    //1024 lük parçalar halinde dosyayı ilet
    let reader=new FileReader()
    reader.onload=(e)=>{
        let buffer=new Uint8Array(reader.result)
        sendUserFile({
            filename:file.name,
            total_buffer_size:buffer.length,
            buffer_size:1024
        },buffer,otherSocketId)
    }

    reader.readAsArrayBuffer(file)


}

export const connectOtherUser=(otherSocketId)=>{
    otherUser=otherSocketId
    socket.emit('sender',{
        to:otherSocketId,
        senderId:window.mySocketId
    })
}
