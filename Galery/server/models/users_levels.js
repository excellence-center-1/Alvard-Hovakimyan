const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    const User_Level = sequelize.define(
      'User_Level',
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
          level_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          score: {
            type: DataTypes.INTEGER,
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
      },
      {
        tableName: 'users_levels',
      }
    );
  
    User_Level.associate = (models) => {
        User_Level.belongsTo(models.User, {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
        });
    
        User_Level.belongsTo(models.Level, {
          foreignKey: 'level_id',
          onDelete: 'CASCADE',
        });


      };
    return User_Level;
  };
  