const express = require('express');
const Methodic = require('../models/methodic');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { methodic } = req.body;
  const { numberID } = req.body;
  if (methodic !== undefined) {
    const newMethodic = await new Methodic(methodic);
    await newMethodic.save();
  }
  await Methodic.deleteOne({ _id: numberID });
  res.send({ answer: true });
});


module.exports = router;
