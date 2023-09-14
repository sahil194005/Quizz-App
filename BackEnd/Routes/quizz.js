const express = require("express");
const router = express.Router();
const {
	get5Questions,
	getCorrectAnswer,
	finishQuizz
} = require("../Controller/Quizz");

const AuthUser = require("../Auth/AuthUser");

router.route("/start-quizz").post(AuthUser, get5Questions);
router
	.route("/get-correct-answer/:_id")
	.get(AuthUser, getCorrectAnswer);

	router.route("/finish").post(AuthUser,finishQuizz)
module.exports = router;
