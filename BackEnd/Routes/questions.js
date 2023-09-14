const express = require("express");
const router = express.Router();
const {
	populateQuestions,
} = require("../Controller/Questions");
router.route("/populate-questions").post(populateQuestions);
module.exports = router;
