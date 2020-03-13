const express = require('express');
const User = require('../models/user');
const Methodic = require('../models/methodic');

const router = express.Router();

router.post('/doctor', async (req, res) => {

  const { doctorName, specialist, email, url } = req.body;
  const newUser = await User.findOneAndUpdate({ email }, { doctorName, specialist, photo: url }, { new: true });
  const addPhotoToMethodics = await Methodic.findOneAndUpdate({ email }, { photo: url }, { new: true });
  res.json({ newUser });
  // res.redirect('/')
});

router.post('/data', async (req, res) => {
  const { doctorEmail } = req.body;
  const url = await User.findOne({ email: doctorEmail }, { photo: 1, _id: 0 });
  res.json(url);
});

module.exports = router;
