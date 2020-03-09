const express = require('express');
const User = require('../models/user');


const router = express.Router();

router.post('/', async (req, res) => {
  const { userName, name, disease } = req.body;

  const user = await User.findOneAndUpdate({ login: userName }, { patientName: name, diseases: disease });
  res.json({ user });
});

router.post('/photo', async (req, res) => {
  const { photo, userName } = req.body;
  const user = await User.findOneAndUpdate({ login: userName }, { photo });
  res.redirect('/patient');
});

module.exports = router;
