const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  const Image = sequelize.define('Image', {
    imageurl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  });
  return Image;
};
