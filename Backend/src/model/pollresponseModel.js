const mongoose = require('mongoose');

const pollResponseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pollId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Poll',
        required: true
    },
    response: {
        type: String,
        required: true
    }
});

module.exports  = mongoose.model('PollResponse', pollResponseSchema);
