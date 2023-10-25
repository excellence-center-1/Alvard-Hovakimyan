const Level = require('./models');
async function getLevel(score) {
    let levelName;
  
    if (score >= 8) {
      levelName = 'mid 2';
    } else if (score >= 5) {
      levelName = 'mid 1';
    } else if (score >= 1) {
      levelName = 'beginner';
    }
  
    return levelName || 'Unknown'; // If no matching level is found
  }
  
  module.exports = { getLevel };
  
module.exports = { getLevel };
