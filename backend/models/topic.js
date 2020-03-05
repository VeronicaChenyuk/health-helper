const mongoose = require('mongoose');


const topicSchema = new mongoose.Schema({
  title: String,
  questions: Array,
});

// noteSchema.statics.mostRecent = async function () {
//   return this.find().sort('createdAt').limit(5).exec();
// };

module.exports = mongoose.model('Topic', topicSchema);
