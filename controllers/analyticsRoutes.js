const router = require('express').Router();

router.get('/', ({ res }) => {
  res.render('analytics', { logged_in: true });
});

module.exports = router;
