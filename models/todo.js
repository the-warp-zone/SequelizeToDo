var Sequelize = require("sequelize");
var sequelize = require("../config/config.json");

var toDo = sequelize.define("list", {
  text: Sequelize.STRING,
  completed: Sequelize.BOOLEAN
});

toDo.sync();

module.exports = toDo;
