const serverConfig = require('./serverConfig')
serverConfig.installServerConfigs()
module.exports = {
    db_host: process.env.MONGO_DB_HOST,
    db_port: process.env.MONGO_DB_PORT,
    db_collection: process.env.MONGO_DB_COLLECTION,
    db_timeout: 5000
}