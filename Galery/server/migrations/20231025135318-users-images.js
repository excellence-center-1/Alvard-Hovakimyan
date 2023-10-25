'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Add a foreign key relationship to reference the "Images" table
    await queryInterface.addColumn('Users', 'imageId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Images', // Make sure this matches the actual table name in your database
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the foreign key relationship
    await queryInterface.removeColumn('Users', 'imageId');

    // Drop the "Users" table
    await queryInterface.dropTable('Users');
  }
};
