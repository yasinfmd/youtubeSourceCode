const Bundler = require("parcel-bundler")
const express = require("express")
const { createProxyMiddleware } = require("http-proxy-middleware")
const app = express()
const bundler = new Bundler("index.html")


app.use(createProxyMiddleware("/api", {
    target: "http://localhost:5000/",
    pathRewrite: {
        "^/api": " "
    }
}))
app.use(bundler.middleware())


app.listen(1234)