const RoomSchema = require("../Models/Rooms");

const createRoom = async (req, res) => {
	try {
		const hostUser = req.User;
		let RoomObj = {
			name: req.body.name,
			playercount: 1,
			status: "waiting",
			host: hostUser._id,
			players: [hostUser._id],
			questions: [],
		};

		const response = await RoomSchema.create(RoomObj);

		res
			.status(201)
			.json({ msg: "Room Created", data: response });
	} catch (error) {
		console.error("Error creating a new room:", error);
		res
			.status(500)
			.json({ error: "Failed to create a new room." });
	}
};

const getRooms = async (req, res) => {
	try {
		const response = await RoomSchema.find().populate({
			path: "players",
			model: "users",
		});

		res
			.status(201)
			.json({ msg: "fetched Rooms", data: response });
	} catch (error) {
		console.error("Error creating a new room:", error);
		res
			.status(500)
			.json({ error: "Failed to create a new room." });
	}
};

const joinRoom = async (req, res) => {
	try {
		
		const response = await RoomSchema.findOneAndUpdate(
			{ _id: req.body.roomId },
			{ $push: { players: req.User._id },status:"full" },
			{new:true} //return updated room object;
		);
		res.status(200).json({ msg: "Joined room successfully", data: response});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to join room." });
	}
};

module.exports = { createRoom, getRooms, joinRoom };
