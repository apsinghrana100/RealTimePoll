const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const authenticate = async (req, res, next) => {
    try {
       
        const token = req.header('Authorization')?.replace('Bearer ', ''); 

        if (!token) {
            return res.status(401).json({ success: false, message: 'No token provided' });
        }
        const decoded = jwt.verify(token, 'sekreteky'); 
        const userId = decoded.userid;

        
        const user = await User.findById(userId); 

        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

       
        req.user = user;
        next();

    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

module.exports = { authenticate };
