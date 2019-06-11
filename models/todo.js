module.exports = function(sequelize, DataTypes) {
  var toDo = sequelize.define("toDo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return toDo;
};
