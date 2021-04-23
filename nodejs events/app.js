const { EventEmitter } = require('events')


const emitter = new EventEmitter();
const CustomLogger = require('./log')

const customLog = new CustomLogger();


customLog.logInfo('Merhaba Log Info')


customLog.on('message', (param) => {
    console.log('parameteres', param)
})


customLog.onCreate()


customLog.onLoad()

customLog.onFinish()

customLog.on('onCreate', () => {
    console.log('onCreate')
})

customLog.on('onLoad', () => {
    console.log('onLoad')
})

customLog.on('onFinish', () => {
    console.log('onFinish')
})

const eventListener = (arg) => {
    console.log(arg)
}


emitter.once('customEvent', eventListener)

emitter.emit('customEvent', { id: 3, name: 'Yasin' })
emitter.emit('customEvent', { id: 1, name: 'Yasin' })
emitter.emit('customEvent', { id: 2, name: 'Yasin' })










