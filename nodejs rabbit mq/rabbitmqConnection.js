const amqp = require('amqplib')

module.exports = async () => {
    const connection = await amqp.connect()
    return connection;
}