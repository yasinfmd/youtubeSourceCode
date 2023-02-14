
console.log("sw")

self.addEventListener('install',(ev)=>{
    console.log(ev)
    console.log("installed !!!")
    ev.waitUntil(
        caches.open("myCache").then((cache)=>{
            console.log(cache)
            cache.addAll(['/','/index.html','/main.js']).then(()=>{
                console.log("Anasayfaya ait js ve html cachelendi")
            },(err)=>{
                console.log("cache işleminde hata ",err)
            })
        }).then(()=>{
            caches.open("myCache").then((cache)=>{
                cache.addAll(['/assets/resim.jpg']).then(()=>{
                    console.log("Resim cachelendi")
                },(err)=>{
                    console.log("resim cache işleminde hata ",err)
                })
            })
         
        })
    )
})

self.addEventListener('activate',(ev)=>{
    console.log(ev)
    console.log("active !!!")
})


self.addEventListener('fetch',(ev)=>{
    console.log('ev', ev)
    console.log(ev.request.url)
    console.log("fetch !!!")
    ev.respondWith(
        caches.match(ev.request).then((cacheResponse)=>{
            return cacheResponse || fetch(ev.request).then((response)=>{
              return caches.open("dynamicCache").then((cache)=>{
                    cache.put(ev.request,response.clone())
                    return response
                })
            })
        })
    )
})