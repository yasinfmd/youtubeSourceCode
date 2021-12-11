const express = require("express")
const app = express()
const routes = require('./router/router')
const helmet = require("helmet");
const configs = require('./configs/config')
const db = require('./db/db')
const swaggerUI = require("swagger-ui-express")
const utils = require('./utils/utils')
const path = require('path')
configs.serverConfig.installServerConfigs()
app.use(helmet())
app.use(express.json())
app.use(`${process.env.APP_PREFIX}user`, routes.user)
app.use(`${process.env.APP_PREFIX}blog`, routes.blog)

app.use(process.env.FILE_PATH, express.static(path.join(__dirname, process.env.FILE_PATH)))

utils.helper.createUploadDir(process.env.UPLOAD_DIR)


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(configs.swaggerConfig.swaggerDocs))

app.listen(process.env.APP_PORT, () => {
    db.mongooseConnection.connectMongoose(configs.mongoDbConfig.db_host, configs.mongoDbConfig.db_port, configs.mongoDbConfig.db_collection, configs.mongoDbConfig.db_timeout)
    console.log("Server Running" + " " + process.env.APP_PORT)
})

