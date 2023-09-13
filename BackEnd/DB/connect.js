const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true, 
			}
		);
		console.log(`MongoDB Connected`);
	} catch (error) {
		console.error(error);
	}
};

module.exports = connectDB;
