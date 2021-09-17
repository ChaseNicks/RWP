const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Tags, Comments } = require('../models');
const withAuth = require('../utils/auth');
