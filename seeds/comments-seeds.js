const { Comment } = require('../models');

const commentData = [
  {
    comment: 'Good post!!',
    post_id: 1,
    user_id: 1,
  },
  {
    comment: 'Ahhh very interesting!',
    post_id: 5,
    user_id: 1,
  },
  {
    comment: 'Cool- cant wait to hear more',
    post_id: 7,
    user_id: 1,
  },
  {
    comment: 'Good post!!',
    post_id: 3,
    user_id: 2,
  },
  {
    comment: 'Ahhh very interesting!',
    post_id: 2,
    user_id: 2,
  },
  {
    comment: 'Cool- cant wait to hear more',
    post_id: 8,
    user_id: 2,
  },
  {
    comment: 'Good post!!',
    post_id: 5,
    user_id: 3,
  },
  {
    comment: 'Ahhh very interesting!',
    post_id: 6,
    user_id: 3,
  },
  {
    comment: 'Cool- cant wait to hear more',
    post_id: 9,
    user_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
