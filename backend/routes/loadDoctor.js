const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/doctor', async (req, res) => {

  const { doctorName, specialist, userName } = req.body;
  const newUser = await User.findOneAndUpdate({ login: userName }, { doctorName: doctorName, specialist: specialist });
  res.json({ newUser })
  // res.redirect('/')
  })

module.exports = router;
