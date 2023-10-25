const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    const User_Subscribtion = sequelize.define(
      'User_Subscribtion',
      {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          subscribtion_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
      },
      {
        tableName: 'users_subscribtions',
        timestamps: false,
      }
    );
  
      
    User_Subscribtion.associate = (models) => {
        User_Subscribtion.belongsTo(models.User, {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
        });
    
        User_Subscribtion.belongsTo(models.Subscribtion, {
          foreignKey: 'subscription_id',
          onDelete: 'CASCADE',
        });
      };
    return User_Subscribtion;
  };
  