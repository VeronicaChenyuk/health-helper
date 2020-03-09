const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/doctor', async (req, res) => {
  console.log(req.body, 'REEEEEEEQ.BOOOODY');

  const { doctorName, specialist, email } = req.body;
  const newUser = await User.findOneAndUpdate({ email }, { doctorName, specialist }, { new: true });
  res.json({ newUser });
  // res.redirect('/')
});

module.exports = router;
