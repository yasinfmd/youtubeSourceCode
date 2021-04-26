const grpc = require('grpc')
const loader = require('@grpc/proto-loader')
const package = loader.loadSync('user.proto', {})
const object = grpc.loadPackageDefinition(package)
const userPackage = object.userPackage;
const server = new grpc.Server();


server.addService(userPackage.User.service, {
    "createUser": createUser,
    "readUsers": readUsers,
    "readUserStream": readUserStream,
    "nowTime": nowTime,
})

server.bind('0.0.0.0:5000', grpc.ServerCredentials.createInsecure())
const users = [{ id: 10, name: 'Ali', lastname: 'Veli' }]
function createUser(call, callback) {
    const userItem = {
        id: users.length + 1,
        name: call.request.name,
        lastname: call.request.lastname
    }
    users.push(userItem)
    callback(null, userItem)

}

function readUsers(call, callback) {
    callback(null, { items: users })
}
function readUserStream(call, callback) {
    users.forEach((item) => {
        call.write(item)
    })
    call.end()
}

function nowTime(call, callback) {
    call.on('data', item => {
        console.log(item)
        call.write({ text: 'Server.js den giden' + ' ' + Date.now() })
    })
    call.on('end', e => {
        console.log('e', e)
    })
}

console.log('server is running on ' + 5000)
server.start();