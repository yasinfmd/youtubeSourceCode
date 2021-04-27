const mqtt = require('mqtt')
const mqttClient = mqtt.connect('ws://localhost:8083/mqtt', { username: 'admin', password: 'public' })

const clientTopic = 'customClientTopic'
const publishTopic = 'customPublishTopic'


mqttClient.on('connect', () => {
    console.log(`Server Connected`)
    mqttClient.publish(publishTopic, JSON.stringify({ id: 1, name: 'Yasin', msg: 'Merhaba' }))
    mqttClient.subscribe(clientTopic)
    // setInterval(() => {
    // }, 1000);
    // mqttClient.end();
})


mqttClient.on('message', (topic, payload) => {
    console.log(`Client Üzerinden Akan Veri`, payload.toString())
})