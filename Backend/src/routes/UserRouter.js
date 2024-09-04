const express = require('express');
const {createUser, logincred} = require('../controller/userController');
const { newPoll, UpdatePoll, fetchAllPoll } = require('../controller/questionController');
const {authenticate} = require('../middleware/auth');
const { getComments, addComment, replyToComment } = require('../controller/commentController');
// const newPoll = require('../controller/questionController');
const router =  express.Router();


router.post("/signup",createUser);
router.post("/loginpage",logincred)
router.post("/insertPollData",authenticate,newPoll)
router.put("/updatePoll",authenticate,UpdatePoll);
router.get("/fetchPoll",authenticate,fetchAllPoll);
router.post("/addComment",authenticate,addComment);
router.post("/replyToComment",authenticate,replyToComment);
router.get("/getComments",getComments)

module.exports = router;



















