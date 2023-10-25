

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
       await queryInterface.bulkInsert('subscribtions', [{
        name_subscribtion: 'open one letter'
        },
      {
        name_subscribtion: 'open two letter'
      }], {});
  
    },
  
    async down (queryInterface, Sequelize) {
       await queryInterface.bulkDelete('subscribtions', null, {});
  
    }
  };
  