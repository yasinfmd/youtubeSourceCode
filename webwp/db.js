const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'messagedb',
    'root',
    'root',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );
   sequelize
 .authenticate()
 .then(() => {
  console.log("DATABASE CONNECTED");
 })
 .catch((err) => {
  console.log(err);
 });
 const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.message = require("./message.model")(sequelize, Sequelize);
module.exports = db;
