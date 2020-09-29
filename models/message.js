'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    idUSERS: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING,
    likes: DataTypes.INTEGER
  },{
      classMethods: {
        associate: function(models) {
          models.Message.belongsTo(models.User, {
            foreignKey : {
              allowNull:false
            }
          })
        }
      }
    });
  // Message.init({
  //   idUSERS: DataTypes.INTEGER,
  //   title: DataTypes.STRING,
  //   content: DataTypes.STRING,
  //   attachment: DataTypes.STRING,
  //   likes: DataTypes.INTEGER
  // }, {
  //   sequelize,
  //   modelName: 'Message',
  // });
  return Message;
};