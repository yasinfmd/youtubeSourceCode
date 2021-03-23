self.addEventListener('push', (e) => {
    self.registration.showNotification('Selam', {
        body: e.data.text(),
        icon: 'https://cdn4.iconfinder.com/data/icons/seo-fourteen-black-and-white/128/button-turn_on-start-push-128.png',
        badge: 'https://cdn2.iconfinder.com/data/icons/stationary-19/100/Thumb_Tack-128.png',
        vibrate: [100, 100, 100],
        actions: [
            {
                'action': 'close', title: 'Bildirimi Kapat Hemen', icon: 'https://cdn2.iconfinder.com/data/icons/stationary-19/100/Thumb_Tack-128.png'
            },
            {
                'action': 'lookMessage', title: 'Ali Sana Mesaj Attı Bir Göz At ', icon: 'https://cdn3.iconfinder.com/data/icons/show-and-hide-password/100/show_hide_password-09-128.png'
            }
        ]
    })
})
self.addEventListener('notificationclick', (event) => {
    if (event.action === 'lookMessage') {
        event.notification.close();
        clients.openWindow('https://www.google.com/')
    }
})