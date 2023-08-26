const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: {
    type: Date,
    get: (date) => date.toISOString().split('T')[0], 
  },
  description: String,
  toDOType: String,
  fileCount: Number, 
});

module.exports = mongoose.model('Task', taskSchema);
