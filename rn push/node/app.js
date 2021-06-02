var admin = require("firebase-admin");

var serviceAccount = require("./reactnativepushapp-firebase-adminsdk-75iph-3c360cf4ea.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const token = "fDVbyiTmTPeW_ln5JnHbgu:APA91bHN9BGyVRJ2sr7VjQ5k6en3-fzBj618zKaicf9lNLSrUQrqlmkVOkan8jDwn3kHyeJCxwqlkhhY5KpndE3w3QRZ_8xRX8YfJQ51qo_FFUgFIyJh9N_vZBpZDchPWpp9HwmK5CQd"

admin.messaging().send({
    token: token,
    data: {
        customData: "Deneme",
        id: "1",
        ad: "Yasin",
        subTitle: "Nodejs Bildirimiii"
    },
    android: {
        notification: {
            body: "Nodejsden Gelen Bildirim 😊",
            title: "Nodejs Title 😊",
            color: "#fff566",
            priority: "high",
            sound: "default",
            vibrateTimingsMillis: [200, 500, 800],
            imageUrl: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    }
}).then((msg) => {
    console.log(msg)
})