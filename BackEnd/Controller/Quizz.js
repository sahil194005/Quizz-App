const QuestionSchema = require("../Models/Questions");

const get5Questions = async (req, res) => {
	try {
		const questions = await QuestionSchema.aggregate([
			{ $sample: { size: 5 } },
			{
				$project: {
					"options.isCorrect": 0,
				},
			},
		]);
		res.status(201).json({ data: questions });
	} catch (error) {
		console.log(error);
		res.status(403).json({
			msg: "unable to fetch questions at this moment",
			error: error,
		});
	}
};

const getCorrectAnswer = async (req, res) => {
	try {
		const { _id } = req.params;
		const response = await QuestionSchema.findOne({
			_id: _id,
		});

		const correctAns = response.options.filter((resi) => {
			if (resi.isCorrect == true) {
				return resi;
			}
		});

		res.status(201).json({
			msg: "Got correct answer",
			data: correctAns[0].text,
		});
	} catch (error) {
		console.log(error);
		res.status(403).json({
			msg: "unable to fetch correct answer at this moment",
			error: error,
		});
	}
};

module.exports = { get5Questions, getCorrectAnswer };
