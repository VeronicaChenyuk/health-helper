const express = require('express');
const Methodic = require('../models/methodic');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { methodic } = req.body;
  const newMethodic = await new Methodic(methodic);
  console.log(newMethodic);
  await newMethodic.save();
  res.redirect('/');
});


module.exports = router;
