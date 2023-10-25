

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('questions', [
      {
          word: "python",
          question: "programming language",
          level_id: 1
      },
      {
          word: "github",
          question: "code hosting platform",
          level_id: 1
      },
      {
          word: "google",
          question: "famous search engine",
          level_id: 1
      },
      {
          word: "mysql",
          question: "a relational database system",
          level_id: 1
      },
      {
          word: "email",
          question: "related to exchanging messages",
          level_id: 1
      },
      {
          word: "html",
          question: "markup language for the web",
          level_id: 1
      },
      {
          word: "body",
          question: "visible part of a web page",
          level_id: 1
      },
      {
          word: "server",
          question: "computer or system that provides resources or services to other computers",
          level_id: 3
      },
      {
          word: "javascript",
          question: "programming language for the web",
          level_id: 2
      },
      {
          word: "react",
          question: "JavaScript library for building user interfaces",
          level_id: 2
      },
      {
          word: "bootstrap",
          question: "Popular CSS framework for building responsive websites",
          level_id: 2
      },
      {
          word: "authorization",
          question: "process of granting or denying access to a resource",
          level_id: 2
      },
      {
          word: "package",
          question: "a collection` of code files or modules that can be reused in software development",
          level_id: 2
      },
      {
          word: "dependency",
          question: "a requirement or condition that another software component or module relies on",
          level_id: 2
      },
      {
          word: "registration",
          question: "process of signing up or creating an account",
          level_id: 2
      },
      {
          word: "library",
          question: "a collection of precompiled code and resources that can be reused in software development",
          level_id: 2
      },
      {
          word: "database",
          question: "Organized collection of structured information or data",
          level_id: 3
      },
      {
          word: "authentication",
          question: "Process of verifying the identity of a user or system",
          level_id: 3
      },
      {
          word: "framework",
          question: "Reusable set of libraries or tools that provide structure and functionality for building applications",
          level_id: 3
      },
      {
          word: "algorithm",
          question: "Step-by-step procedure or set of rules for solving a problem or accomplishing a task",
          level_id: 3
      },
      {
          word: "responsive",
          question: "Design or layout that adjusts and adapts to different screen sizes or devices",
          level_id: 3
      }
  
  ], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('questions', null, {});

  }
};
