const cacheName = "MyFirstCustomCache"
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open(cacheName).then((cache) => {
            return cache.match(event.request).then((response) => {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request.clone()).then((response) => {
                        cache.put(event.request, response.clone())
                        return response;
                    })
                }
            })
        }).catch((err) => {
            console.log('error', err)
        })
    )
})
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(['index.html', 'bootsrap.css', 'index.js'])
        }).catch((err) => {
            console.log('hata', err)
        })
    )
})