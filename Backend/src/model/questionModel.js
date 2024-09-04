const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true, 
  },
  votes: {
    type: Number,
    default: 0, 
  },
});

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true, 
  },
  options: [optionSchema], 
  createdAt: {
    type: Date,
    default: Date.now, 
    type: Date, 
  },
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
