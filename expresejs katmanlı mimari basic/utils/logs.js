const { createLogger } = require('winston')

const logConfig = require('../configs/config')

module.exports = createLogger({
    level: logConfig.logConfig.level,
    format: logConfig.logConfig.format,
    transports: logConfig.logConfig.transport,
})