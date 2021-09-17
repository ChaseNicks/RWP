const { Tags } = require('../models');

const tagData = [
  {
    id: 1,
    catgory: 'Front-End',
  },
  {
    id: 2,
    catgory: 'Back-End',
  },
  {
    id: 3,
    catgory: 'Database',
  },
  {
    id: 4,
    catgory: 'Full-Stack Development',
  },
  {
    id: 5,
    catgory: 'File Structure',
  },
  {
    id: 6,
    catgory: 'Algorithms',
  },
  {
    id: 7,
    catgory: 'Data Structures',
  },
  {
    id: 8,
    catgory: 'Frameworks',
  },
  {
    id: 9,
    catgory: 'Libraries',
  },
];

const seedTags = () => Tags.bulkCreate(tagData);

module.exports = seedTags;
