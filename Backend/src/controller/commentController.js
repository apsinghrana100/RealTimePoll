const Comment = require('../model/commentModel');

exports.addComment = async (req, res) => {
    try {
        const { pollId, commentText } = req.body;
        const userId = req.user._id; // Use the authenticated user's ID

        const newComment = new Comment({
            userId,
            pollId,
            commentText
        });

        await newComment.save();

        // Emit the new comment to clients
        req.io.emit('newComment', newComment);

        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.replyToComment = async (req, res) => {
    try {
        const { commentId, replyText } = req.body;
        const userId = req.user._id; // Use the authenticated user's ID

        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        const newReply = {
            userId,
            replyText
        };

        comment.replies.push(newReply);
        await comment.save();

        // Emit the updated comment to clients
        req.io.emit('commentUpdated', comment);

        res.status(201).json(comment);
    } catch (error) {
        console.error('Error replying to comment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getComments = async (req, res) => {
    try {
        const { pollId } = req.query;
        const comments = await Comment.find({ pollId }).populate('userId', 'username').populate('replies.userId', 'username').exec();
        res.status(200).json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

