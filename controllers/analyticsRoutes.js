const router = require('express').Router();

// Renders the analytics.handlebars page
router.get('/', ({ res }) => {
  res.render('analytics', { logged_in: true });
});

module.exports = router;
