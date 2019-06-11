module.exports = function(sequelize, DataTypes) {
  var toDo = sequelize.define("toDo", {
    text: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    complete: DataTypes.BOOLEAN
  });
  return toDo;
};
