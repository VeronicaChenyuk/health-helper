const mongoose = require('mongoose');


const notebookSchema = new mongoose.Schema({
  title: String,
  notes: [],
  createdAt: Date,
});

// noteSchema.statics.mostRecent = async function () {
//   return this.find().sort('createdAt').limit(5).exec();
// };

module.exports = mongoose.model('Notebook', notebookSchema);
