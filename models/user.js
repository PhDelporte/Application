'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    classMethods:{
      associate: function(models){
        models.User.hasMany(models.Message)
      }
    }
  });
  // User.init({
  //   email: DataTypes.STRING,
  //   username: DataTypes.STRING,
  //   password: DataTypes.STRING,
  //   bio: DataTypes.STRING,
  //   isAdmin: DataTypes.BOOLEAN
  // }, {
  //   sequelize,
  //   modelName: 'User',
  // });
  return User;
};