const express = require('express');
const User = require('../models/user');


const router = express.Router();

/* GET home page. */
router.post('/login', async (req, res) => {
  console.log('>>>> LOGIN');
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  return user ? res.json({ answer: true, user }) : res.json({ answer: false });
});

router.post('/registration', async (req, res) => {
  console.log('>>>> REGISTRATION');
  const {
    login, email, password, statusUser,
  } = req.body;
  const user = [
    {
      login,
      email,
      password,
      status: statusUser,
    },
  ];

  const newUser = await User.insertMany(user);

  return newUser && res.json({ user });
});

module.exports = router;
