const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tags extends Model {}

Tags.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_tags: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'tag',
        key: 'id'
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
         model: 'post',
         key: 'id' 
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tags',
  }
);

module.exports = Tags;