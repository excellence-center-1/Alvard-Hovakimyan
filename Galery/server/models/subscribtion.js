const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    const Subscribtion = sequelize.define(
      'Subscribtion',
      {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          name_subscribtion: {
            type: DataTypes.STRING,
            allowNull: false,
          },
      },
      {
        tableName: 'subscribtions',
        timestamps: false,
      }
    );
  
    return Subscribtion;
  };
  