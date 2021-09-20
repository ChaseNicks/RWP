const router = require('express').Router();
const { User, Post, Tag } = require('../models');
const withAuth = require('../utils/auth');
const fetch = require('node-fetch');

// Gets all the posts and passes them to the handlebars renderer
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Tag,
          attributes: ['category'],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { posts, logged_in: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Gets the info needed for one post for editing and passes them to the handlebars renderer
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        'id',
        'title',
        'content',
        'tag_id',
        'user_id',
        'upvotes',
        'date_created',
      ],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Tag,
          attributes: ['category'],
        },
      ],
    });

    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    const post = dbPostData.get({ plain: true });
    res.render('edit-post', { post, logged_in: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Gets all users from the database
router.get('/users', withAuth, async ({ res }) => {
  try {
    const dbUserData = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    const users = dbUserData.map((user) => user.get({ plain: true }));

    res.render('users', { users, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets posts and returns them based on date_created
router.get('/resent-posts', withAuth, async ({ res }) => {
  try {
    const dbRecentPostData = await Post.findAll({
      attributes: [
        'id',
        'title',
        'content',
        'tag_id',
        'upvotes',
        'user_id',
        'date_created',
      ],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Tag,
          attributes: ['category'],
        },
      ],
      order: [['date_created', 'DESC']],
      limit: 8,
    });

    const resentPosts = dbRecentPostData.map((post) =>
      post.get({ plain: true }),
    );

    res.render('resent-posts', { resentPosts, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get the posts and groups them by the tag name
router.get('/posts-by-tags', withAuth, async ({ res }) => {
  try {
    const dbPostsByTagsData = await Post.findAll({
      attributes: [
        'id',
        'title',
        'content',
        'tag_id',
        'user_id',
        'upvotes',
        'date_created',
      ],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Tag,
          attributes: ['category'],
        },
      ],
      order: [['tag_id', 'ASC']],
    });

    const postsByTags = dbPostsByTagsData.map((post) =>
      post.get({ plain: true }),
    );

    res.render('posts-by-tags', { postsByTags, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets top posts based on the upvotes
router.get('/top-posts', withAuth, async (req, res) => {
  try {
    const dbUpvotesData = await Post.findAll({
      attributes: [
        'id',
        'title',
        'content',
        'tag_id',
        'upvotes',
        'user_id',
        'date_created',
      ],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Tag,
          attributes: ['category'],
        },
      ],
      order: [['upvotes', 'DESC']],
    });

    const topPosts = dbUpvotesData.map((post) => post.get({ plain: true }));

    res.render('top-posts', { topPosts, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Calls the new dashboard route to create new posts
router.get('/new', withAuth, ({ res }) => {
  res.render('new-post', { logged_in: true });
});

module.exports = router;
