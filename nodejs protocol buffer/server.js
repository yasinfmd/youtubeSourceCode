const grpc = require("grpc");
const loader = require("@grpc/proto-loader")
const packageDef = loader.loadSync("user.proto", {});
const object = grpc.loadPackageDefinition(packageDef);
const userPackage = object.userPackage;
const server = new grpc.Server()
server.addService(userPackage.User.service, {
    "createUser": createUser,
    "readUsers": readUsers,
    "readUsersStream": readUsersStream,
    "chat": chat
})

const users = []
server.bind('0.0.0.0:5000', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:5000')
function createUser(call, callback) {
    const userItem = {
        id: users.length + 1,
        name: call.request.name,
        lastname: call.request.lastname
    }
    users.push(userItem)
    console.log('_', call)
    console.log('cb', callback)
    callback(null, userItem);

}
function chat(call, callback) {
    call.on('data', item => {
        console.log('clienttan gelen', item)
        call.write({ text: Date.now() + 'Serverdan' })
    })
    call.on('end', item => {
        console.log('clienttan biten', item)
    })

}

function readUsers(call, callback) {
    callback(null, { "items": users })
}

function readUsersStream(call, callback) {
    users.forEach((item) => {
        call.write(item)
    })
    call.end();
}
server.start()
