const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Tag = require('./Tag');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Tag.hasMany(Post, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Tag, Comment };
