'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subsciptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      }});
      {
        createdAt: false;
        updatedAt: false;
        
      }
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subsciptions');
  }
};