const QuestionSchema = require("../Models/Questions");
const jsonData = require("../utils/questionSet");
const populateQuestions = async (req, res) => {
	try {
		for (const questionData of jsonData) {
			const {
				category,
				difficulty,
				question,
				correct_answer,
				incorrect_answers,
			} = questionData;
            
			const options = [
				...incorrect_answers,
				correct_answer,
            ];
           

			const finalOptions = options 
				.map((text, index) => ({
					text,
					isCorrect: index === options.length - 1,
				}))
                .sort(() => Math.random() - 0.5);
            
            const response = await QuestionSchema.create({
                category,
                difficulty,
                question,
                options :finalOptions,
            })
        } 
        res.json({ msg: "successfully populated" });
	} catch (error) {
		console.error("Error populating questions:", error);
		res
			.status(403)
			.json({ msg: "error populating", error: error });
	}
};

module.exports = {
	populateQuestions,
};
