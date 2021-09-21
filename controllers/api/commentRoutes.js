const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Gets all comments from the database
router.get('/', async ({ res }) => {
  try {
    const dbCommentData = await Comment.findAll({});

    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Gets one comment by id from the database
router.get('/:id', async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Creates a new comment with the post_id and user_id references
router.post('/', withAuth, async (req, res) => {
  if (req.session) {
    try {
      const dbCommentData = await Comment.create({
        comment: req.body.comment,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// Updates one comment based on the id
router.put('/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.update(
      {
        comment: req.body.comment,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );

    if (!dbCommentData) {
      res.status(404).json({ message: 'No comment found with this id' });
      return;
    }
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Deletes one comment based on the id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.destroy({
      where: {
        id: req.body.id,
      },
    });
    if (!dbCommentData) {
      res.status(404).json({ message: 'No comment found with this id' });
      return;
    }
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
