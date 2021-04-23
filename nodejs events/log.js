const { EventEmitter } = require('events')
class CustomLog extends EventEmitter {
    logInfo(msg) {
        setTimeout(() => {
            this.emit('message', { msg })
        }, 3000);
    }
    onCreate() {
        setTimeout(() => {
            this.emit('onCreate')
        }, 1000);
    }

    onLoad() {
        setTimeout(() => {
            this.emit('onLoad')
        }, 2000);
    }

    onFinish() {
        setTimeout(() => {
            this.emit('onFinish')
        }, 3000);
    }
}

module.exports = CustomLog;