const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/doctor', async(req,res) =>{
  
  const {doctorName,specialist,file} = req.body;
  const newUser = await new User({doctorName,specialist,file});
  await newUser.save();
  res.redirect('/')
})



module.exports = router;
