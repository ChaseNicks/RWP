const { Tag } = require('../models');

const tagData = [
  {
    category: 'Front-End',
  },
  {
    category: 'Back-End',
  },
  {
    category: 'Database',
  },
  {
    category: 'Full-Stack Development',
  },
  {
    category: 'File Structure',
  },
  {
    category: 'Algorithms',
  },
  {
    category: 'Data Structures',
  },
  {
    category: 'Frameworks',
  },
  {
    category: 'Libraries',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
