const express = require('express');
const User = require('../models/user');


const router = express.Router();

/* GET home page. */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  return user ? res.json({ answer: true, user }) : res.json({ answer: false });
});

router.post('/registration', async (req, res) => {
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
  console.log(user);
  const findUser = await User.findOne({ email });
  console.log(findUser);
  if (findUser === null) {
    await User.create(user);
    return res.json({ user });
  }
  return res.json({ answer: 'Такая почта уже зарегистрирована.' });
});

module.exports = router;
