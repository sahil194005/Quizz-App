const express = require("express");
const router = express.Router();
const { get5Questions,getCorrectAnswer } = require("../Controller/Quizz");
const AuthUser = require("../Auth/AuthUser");
router
	.route("/start-quizz")
	.post(AuthUser, get5Questions);
router.route('/get-correct-answer/:_id').get(AuthUser, getCorrectAnswer);
module.exports = router;
 