const express = require('express');
const Methodic = require('../models/methodic');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { docEmail } = req.body;
  const methodics = await Methodic.find({ doctorEmail: docEmail });
  console.log(methodics);
  res.json(methodics);
});


module.exports = router;
