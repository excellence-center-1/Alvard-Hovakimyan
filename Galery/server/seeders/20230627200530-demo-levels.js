

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('levels', [{
       level_name: 'beginner',
  score: 1
      },
    {
        level_name: 'mid1',
        score: 5 
    },
    {
        level_name: 'mid2',
        score: 8 
    }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('levels', null, {});

  }
};
