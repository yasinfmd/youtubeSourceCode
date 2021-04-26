const grpc = require('grpc')
const loader = require('@grpc/proto-loader')
const package = loader.loadSync('user.proto', {})
const object = grpc.loadPackageDefinition(package)
const userPackage = object.userPackage;

const client = new userPackage.User('localhost:5000', grpc.credentials.createInsecure())

const name = process.argv[2]
const lastname = process.argv[3]

client.createUser({ id: 0, name, lastname }, (err, response) => {
    console.log('err', err)
    console.log('response', response)

})

const nowCall = client.nowTime();

setInterval(() => {
    nowCall.write({ text: 'client.js' + ' ' + Date.now() })
}, 1000);

nowCall.on('data', item => {
    console.log(JSON.stringify(item))
})

const call = client.readUserStream()

call.on('data', item => {
    console.log('read stream data' + ' ' + JSON.stringify(item))
})

call.on('end', e => {
    console.log('e', e)
})
// setTimeout(() => {
//     client.readUsers(null, (err, response) => {
//         console.log('read users response', response)
//     })
// }, 2000);