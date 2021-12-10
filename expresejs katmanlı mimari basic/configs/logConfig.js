const serverConfig = require('./serverConfig')
serverConfig.installServerConfigs()
const { format, transports } = require('winston')
const { combine, timestamp, json } = format
require('winston-daily-rotate-file')
const path = require('path')
module.exports = {
    level: process.env.LOGGER_LEVEL,
    format: combine(
        timestamp({
            format: process.env.LOGGER_TIMESTAMP_FORMAT
        }),
        json()
    ),
    transport: [
        new transports.DailyRotateFile({
            filename: process.env.LOG_FILE_NAME,
            level: process.env.LOG_TRANSPORT_LEVEL,
            datePattern: process.env.LOGGER_DATE_PATTERN,
            json: true,
            dirname: path.resolve(process.env.LOG_PATH)
        })
    ]
}