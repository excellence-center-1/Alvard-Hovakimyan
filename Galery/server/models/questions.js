const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    const Question = sequelize.define(
      'Question',
      {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          word: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          question: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          level_id: {
            type: DataTypes.STRING,
            allowNull: false,
          },
      },
      {
        tableName: 'questions',
        timestamps: false,
      }
    );

    Question.associate = (models) => {
    
      Question.belongsTo(models.Level, {
        foreignKey: 'level_id',
        onDelete: 'CASCADE',
      });

    };
    return Question;
  };
  