const mqtt = require('mqtt')
const mqttClient = mqtt.connect('ws://localhost:8083/mqtt', { username: 'admin', password: 'public' })

const clientTopic = 'customClientTopic'
const publishTopic = 'customPublishTopic'

mqttClient.on('connect', () => {
    console.log(`clientConnected`)
    mqttClient.subscribe(publishTopic)
    setInterval(() => {
        mqttClient.publish(clientTopic, 'Merheba Serverrrr :)')
    }, 1000);

})

mqttClient.on('message', (topic, paylaod) => {
    console.log(`topic`, topic)
    console.log(`paylaod`, JSON.parse(paylaod.toString()))

})