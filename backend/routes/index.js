const express = require('express');
const Topic = require('../models/topic');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/games', async (req, res) => {
//   console.log("WTF????????????/");
//   const topics = await Topic.find();
//   console.log(topics);
//   res.json(topics);
// });

module.exports = router;
