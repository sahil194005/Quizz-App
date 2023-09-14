const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

const QuestionSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
    enum: ["easy", "medium", "hard"], 
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [OptionSchema], 
   
  },
});



module.exports = mongoose.model("Question", QuestionSchema);
