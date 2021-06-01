const DBConfig = require("./db.config.json");
const Sequelize = require("sequelize");

const seq = new Sequelize(
  DBConfig.database,
  DBConfig.username,
  DBConfig.password,
  {
    host: DBConfig.host,
    dialect: DBConfig.dialect,
    operatorsAliases: false,
    logging: false,
  }
);
const db = {};
db.seq = seq;
db.Todo = require("../models/Todo.model")(seq);
db.SubTask = require("../models/Task.model")(seq);
db.Todo.hasMany(db.SubTask);
db.SubTask.belongsTo(db.Todo);
module.exports = db;
