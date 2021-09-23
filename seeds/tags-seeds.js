const { Tag } = require('../models');

const tagData = [
  {
    category: 'Back-End',
  },
  {
    category: 'Front-End',
  },
  {
    category: 'Networking',
  },
  {
    category: 'Interview Help',
  },
  {
    category: 'Company Info',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
