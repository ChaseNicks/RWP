const router = require('express').Router();
const { Post, User, Tag, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username', 'email'],
        },
        {
          model: Tag,
          attributes: ['category'],
        },
        {
          model: Comment,
          attributes: ['comment'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets posts and returns them based on date_created
router.get('/recent-posts', withAuth, async (req, res) => {
  try {
    const dbRecentPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Tag,
          attributes: ['category'],
        },
        {
          model: Comment,
          attributes: ['comment'],
        },
      ],
      order: [['date_created', 'DESC']],
      limit: 8,
    });

    const posts = dbRecentPostData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts-by-tags', withAuth, async ({ res }) => {
  try {
    const dbPostsByTagsData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Tag,
          attributes: ['category'],
        },
        {
          model: Comment,
          attributes: ['comment'],
        },
      ],
      order: [['tag_id', 'ASC']],
    });

    const posts = dbPostsByTagsData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets top posts based on the upvotes
router.get('/top-posts', withAuth, async (req, res) => {
  try {
    const dbUpvotesData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Tag,
          attributes: ['category'],
        },
        {
          model: Comment,
          attributes: ['comment'],
        },
      ],
      order: [['upvotes', 'DESC']],
    });

    const posts = dbUpvotesData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
