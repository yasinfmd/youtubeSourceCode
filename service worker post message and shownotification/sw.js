

self.addEventListener('install',(ev)=>{
    console.log("install",ev)
})
self.addEventListener('activate',(ev)=>{
    console.log("activate",ev)
})

self.addEventListener('message',async (ev)=>{
    console.log('message service worker',ev)
    let msg=ev.data.msg
    let clientId=ev.source.id
    let arr=[]
   arr= await clients.matchAll({includeUncontrolled:true})
   console.log(arr)
   console.log(clients.get(clientId))
   clients.get(clientId).then((client) => {
    console.log(client)
  });
   return Promise.all(
    arr.map((client)=>{
        return client.postMessage(msg)
    })
   )
})


if (self.Notification.permission === "granted") {
    const notificationObject = {
      body: "Click here to view your messages.",
      data: { url: `${self.location.origin}/some/path` },
      // data: { url: 'http://example.com' },
    };
    self.registration.showNotification(
      "You've got messages!",
      notificationObject
    );
  }
  
  // Notification click event listener
  self.addEventListener("notificationclick", (e) => {
    console.log("notification click")
    // Close the notification popout
    e.notification.close();
    // Get all the Window clients
    e.waitUntil(
      clients.matchAll({ type: "window" }).then((clientsArr) => {
        // If a Window tab matching the targeted URL already exists, focus that;
        const hadWindowToFocus = clientsArr.some((windowClient) =>
          windowClient.url === e.notification.data.url
            ? (windowClient.focus(), true)
            : false
        );
        // Otherwise, open a new tab to the applicable URL and focus it.
        if (!hadWindowToFocus)
          clients
            .openWindow(e.notification.data.url)
            .then((windowClient) => (windowClient ? windowClient.focus() : null));
      })
    );
  });