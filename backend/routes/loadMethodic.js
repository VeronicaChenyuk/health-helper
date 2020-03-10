const express = require('express');
const Methodic = require('../models/methodic');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { email } = req.body;
  const methodics = await Methodic.find({ doctorEmail: email });
  res.json(methodics);
});


module.exports = router;
