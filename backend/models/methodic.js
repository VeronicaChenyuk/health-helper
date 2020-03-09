const mongoose = require('mongoose');


const methodicSchema = new mongoose.Schema({
  patientEmail: { type: String },
  doctorEmail: { type: String },
  drugs: { type: Array },
  theraphies: { type: Array },
  analisis: { type: Array },
  comment: { type: String },
  patientReports: { type: Array },
  nextVisit: { type: String },
});

module.exports = mongoose.model('Methodic', methodicSchema);
