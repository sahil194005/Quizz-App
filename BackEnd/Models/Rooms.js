const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.set('strictPopulate', false);
const RoomSchema = new mongoose.Schema(
	{
		name: {
			type: String,
            required: true,
            trim: true, 
			minlength: 3, 
			maxlength: 50, 
		},
		playerCount: { 
			type: Number,
            required: true,
            default: 1,
            max: 2, 
		},
		status: {
			type: String,
            default: "waiting",
            enum: ["waiting", "in-progress", "finished"]
		},
		players: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "UserSchema",
				
			},
		],
		host: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "UserSchema",
		},
		questions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Question", // Reference to the Question Model
			},
		],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("rooms", RoomSchema);
