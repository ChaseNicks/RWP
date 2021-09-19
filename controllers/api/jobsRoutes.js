const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  try {
    const response = await fetch(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&results_per_page=10&category=it-jobs`,
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
