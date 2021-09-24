const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates a new post and saves it in the database with all the necessary relational data
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      tag_id: req.body.tag_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates one post based on it's id and saves the updated post to the database
router.put('/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.update(
      {
        ...req.body,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Upvotes one the posts by incrementing the upvotes column
router.put('/upvote/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.increment(
      {
        upvotes: +1,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Downvotes one the posts by decrementing the upvotes column
router.put('/downvote/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.decrement(
      {
        upvotes: 1,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Deletes one of the posts based on the post id and the user id
// So won't allow a user to delete post of another user
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).send({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
