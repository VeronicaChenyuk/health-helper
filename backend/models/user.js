const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  login: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  status: { type: String, required: true },
  patientName: { type: String },
  doctorName: { type: String },
  photo: { type: String },
  diseases: { type: String },
  diary: { type: String },
  specialist: { type: String },
});


module.exports = mongoose.model('User', userSchema);
