const mongoose = require('mongoose');
const Poll = require('../model/questionModel');
const pollresponseModel = require('../model/pollresponseModel');

exports.newPoll = async(request, response)=>{
    const Polldata = new Poll(request.body);
    try {
        if(!Polldata)
            if(!Polldata){
                return response.status(404).json({msg:"user not found"});    
          }
        const output = await Polldata.save();
        request.io.emit('pollUpdated', output); 
        return response.status(201).json({msg:`created successfull ${output}`}
        )
    } catch (error) {
        return response.status(500).json({msg:`somewent wrong ${error}`})
    }
};

exports.UpdatePoll = async (req, res) => {
  const { pollId, optionId, userId } = req.body;

  try {
      // Check if the user has already responded to this poll
      const existingResponse = await pollresponseModel.findOne({ userId, pollId });

      if (existingResponse) {
          return res.status(403).json({ msg: "You have already voted on this poll." });
      }

      // If no existing response, record the vote
      const poll = await Poll.findByIdAndUpdate(
          pollId,
          { $inc: { 'options.$[elem].votes': 1 } }, 
          {
              arrayFilters: [{ 'elem._id': optionId }],
              new: true, 
          }
      );

      if (!poll) {
          return res.status(404).json({ msg: "Poll not found." });
      }

      // Save the user's response
      const pollResponse = new pollresponseModel({
          userId,
          pollId,
          response: optionId, 
      });

      await pollResponse.save();

      req.io.emit('pollUpdated', poll);
      return res.status(202).json({ msg: "Data updated successfully" });

  } catch (err) {
      console.error('Error recording vote:', err);
      return res.status(500).json({ msg: `Something went wrong: ${err.message}` });
  }
};


exports.fetchAllPoll = async (request, response) => {
  try {
      const polls = await Poll.find(); // Fetch all polls from the database
      response.status(200).json(polls);
  } catch (error) {
      response.status(500).json({ msg: `Something went wrong: ${error}` });
  }
};





