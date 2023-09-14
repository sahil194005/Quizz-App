const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.set("strictPopulate", false);

const MarkSchema = new mongoose.Schema({
	player: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "UserSchema", // Reference to the UserSchema
	},
	marks: {
		type: Number,
		default: 0, // You can set an initial value for marks if needed
	},
});
const RoomSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
			maxlength: 50,
		},
		status: {
			type: String,
			default: "waiting",
			enum: ["waiting", "in-progress", "finished", "full"],
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
		
		marks: [MarkSchema],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("rooms", RoomSchema);
