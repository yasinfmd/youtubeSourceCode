const grpc = require("grpc");
const loader = require("@grpc/proto-loader")
const packageDef = loader.loadSync("user.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const object = grpc.loadPackageDefinition(packageDef);
const userPackage = object.userPackage;

const name = process.argv[2]
const surname = process.argv[3]
const client = new userPackage.User('localhost:5000', grpc.credentials.createInsecure())


client.createUser({ id: -1, name: name, lastname: surname }, (err, response) => {
    // console.log('err', err)
    //console.log('response', response)
    //console.log('response', JSON.stringify(response))

})
var grpcExpress = require('grpc-express');
var express = require('express')
var cors = require('cors')
var app = express()
app.use(grpcExpress(client));
app.use(cors())


// setTimeout(() => {
//     client.readUsers(null, (err, response) => {
//         console.log("serverdan gelen users " + JSON.stringify(response))

//     })
// }, 10000);

const chatCall = client.chat();
chatCall.on('data', item => {
    console.log('item', item)
})

setInterval(() => {
    console.log('clientda')
    chatCall.write({ text: Date.now() })
    //chatCall.end();
}, 1000);

const call = client.readUsersStream();


call.on('data', item => {
    //console.log('item', item)
})

call.on('end', (e) => {
    console.log('e', e)
})
