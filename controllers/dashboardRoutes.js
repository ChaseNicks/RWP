const router = require('express').Router();
const { User, Post, Tags, Comments } = require('../models');
const withAuth = require('../utils/auth');

// Gets all the posts and passes them to the handlebars renderer
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ['id', 'title', 'content', 'post_tags', 'created_at'],
      include: [
        {
          model: Comments,
          attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Tags,
          attributes: ['category'],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { posts, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
