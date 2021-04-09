const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const Phones = sequelize.define('Phones', {
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumberType: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});
module.exports = Phones;