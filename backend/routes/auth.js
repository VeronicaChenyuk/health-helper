const express = require('express');
const User = require('../models/user');


const router = express.Router();

/* GET home page. */
router.post('/login', async (req, res, next) => {
  console.log('>>>> LOGIN');
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  return user ? res.json({ answer: true, login: user.login }) : res.json({ answer: false });
  // if (!user) {
  //   await User.create({
  //     email, password,
  //   });
  // }
  // req.session.uhser = email;
});

router.post('/registration', async (req, res, next) => {
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

  return newUser && res.json({ status: statusUser });
  // if (!user) {
  //   await User.create({
  //     email, password,
  //   });
  // }
  // req.session.uhser = email;
});

module.exports = router;
