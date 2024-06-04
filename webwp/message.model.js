const { Sequelize, DataTypes } = require("sequelize");

const sequelize=require('./db')
module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
      title: {
        type: Sequelize.STRING
      },
    });
  
    return Message;
  };