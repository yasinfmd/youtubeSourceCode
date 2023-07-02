require('@babel/register')({
    presets:['@babel/preset-react','@babel/preset-env']
})

const express=require('express')

const React=require('react')

const ReactDOMServer=require('react-dom/server')

const {default:App}=require('./App')

const app=express()


app.use(express.static('public'))

app.get('/',(req,res)=>{
    const appHtml=ReactDOMServer.renderToString(React.createElement(App))
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React SSR App</title>
        <link href="/static/css/main.073c9b0a.css" rel="stylesheet" />
    </head>
    <body>
        <div id='root'>${appHtml}</div>
        <script  src="/static/js/main.1a06afbc.js"></script>
        <script  src="/static/js/787.8ca8e66a.chunk.js"></script>

    </body>
    </html>
    `)
})


app.listen(3000,()=>{
    console.log('server running on port 3000')
})