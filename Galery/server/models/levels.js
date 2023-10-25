const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Level = sequelize.define(
        'Level',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            level_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            score: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'levels',
            timestamps: false,
        }
    );

    return Level;
};

