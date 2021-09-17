const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');
const Tags = require('./Tags');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});


module.exports = { User, Post, Tags, Comments };
