const express = require("express")
const app = express()
const routes = require('./router/router')
const helmet = require("helmet");
const configs = require('./configs/config')
const db = require('./db/db')



configs.serverConfig.installServerConfigs()

app.use(helmet())
app.use(express.json())

app.use(`${process.env.APP_PREFIX}user`, routes.user)
app.use(`${process.env.APP_PREFIX}blog`, routes.blog)




app.listen(process.env.APP_PORT, () => {
    db.mongooseConnection.connectMongoose(configs.mongoDbConfig.db_host, configs.mongoDbConfig.db_port, configs.mongoDbConfig.db_collection, configs.mongoDbConfig.db_timeout)
    console.log("Server Running" + " " + process.env.APP_PORT)
})

