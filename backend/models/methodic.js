const mongoose = require('mongoose');


const methodicSchema = new mongoose.Schema({
  patientName: { type: String },
  patientEmail: { type: String },
  doctorEmail: { type: String },
  doctorFullName: { type: String },
  drugs: { type: Array },
  theraphies: { type: Array },
  analisis: { type: Array },
  comment: { type: String },
  patientReports: { type: Array },
  dateOfTheLastVisit: { type: String },
  nextVisit: { type: String },
});

module.exports = mongoose.model('Methodic', methodicSchema);
