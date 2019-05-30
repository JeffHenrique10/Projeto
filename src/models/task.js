const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: false
  },
  createdAT: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Task', TaskSchema)
