const express = require("express")
const app = express()
const routes = require('./router/router')
const helmet = require("helmet");
const configs = require('./configs/config')


configs.serverConfig.installServerConfigs()

app.use(helmet())

app.use(`${process.env.APP_PREFIX}user`, routes.user)
app.use(`${process.env.APP_PREFIX}blog`, routes.blog)



app.listen(process.env.APP_PORT, () => {
    console.log("Server Running" + " " + process.env.APP_PORT)
})

