const router = require('express').Router();
const Methodic = require('../models/methodic');

router.post('/info', async (req, res) => {
  const { email } = req.body;
  const methodics = await Methodic.find({ patientEmail: email });
  return methodics ? res.json({ answer: true, methodics }) : res.json({ answer: false });
});

module.exports = router;
