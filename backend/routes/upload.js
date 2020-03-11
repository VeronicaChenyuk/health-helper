const express = require('express');
const User = require('../models/user');


const router = express.Router();

router.post('/', async (req, res) => {
  const { login, name, disease, url } = req.body;

  const user = await User.findOneAndUpdate({ login }, { patientName: name, diseases: disease, photo: url }, { new: true });
  res.json({ user });
});


module.exports = router;
