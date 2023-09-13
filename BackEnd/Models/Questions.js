// const mongoose = require("mongoose");

// const QuestionSchema = new mongoose.Schema(
// 	{
// 		questionText: {
// 			type: String,
// 			required: true,
// 			trim: true,
// 			minlength: 5, 
// 			maxlength: 500,
// 		},
// 		correctAnswer: {
// 			type: String,
// 			required: true,
// 			trim: true,
// 			minlength: 1, // Minimum length for the correct answer
// 			maxlength: 100, // Maximum length for the correct answer
// 		},
// 		options: [
// 			{
// 				type: String,
// 				required: true,
// 				trim: true,
// 				minlength: 1, // Minimum length for each option
// 				maxlength: 100, // Maximum length for each option
// 			},
// 		],
// 		category: {
// 			type: String,
// 			required: true,
// 			trim: true,
// 			enum: ["General Knowledge", "Science", "History", "Geography", "Other"], // Define valid categories
// 		},
// 		difficulty: {
// 			type: String,
// 			required: true,
// 			trim: true,
// 			enum: ["Easy", "Medium", "Hard"], // Define valid difficulty levels
// 		},
// 	},
// 	{
// 		timestamps: true,
// 	}
// );

// module.exports = mongoose.model("questions", QuestionSchema);
