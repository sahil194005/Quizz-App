const RoomSchema = require("../Models/Rooms");
const UserSchema = require("../Models/Users");
const createRoom = async (req, res) => {
	try {
		const hostUser = req.User;
		const hostName = await UserSchema.find({
			_id: req.User._id,
		});

		let RoomObj = {
			name: req.body.name,
			status: "waiting",
			host: hostUser._id,
			players: [hostUser._id],
			marks: [{ player: hostUser._id, marks: 0 }],
		};

		const response = await RoomSchema.create(RoomObj);

		await response.populate({
			path: "players",
			model: "users",
		});
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
		const response = await RoomSchema.find({
			status: { $ne: "finished" },
		}).populate({
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
			{
				$push: {
					players: req.User._id,
				},
				$addToSet: {
					marks: { player: req.User._id, marks: 0 },
				},
				status: "full",
			},
			{ new: true } // return updated room object;
		);

		const resi = await response.populate({
			path: "players",
			model: "users",
		});

		res.status(200).json({
			msg: "Joined room successfully",
			data: resi,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to join room." });
	}
};

const showList = async (req, res) => {
	
	try {
		const userId = req.User._id;
		const rooms = await RoomSchema.find({
			status: "finished",
		}).populate({
			path: "players",
			model: "users",
		});
		const newRooms = rooms.filter((room) => {
			if (
				room.players[0]._id !== req.User._id &&
				room.players[1]._id !== req.User._id
			) {
				return room;
			}
		});

		res.status(200).json({
			msg: "Rooms with status 'finished' and matching player found",
			data: rooms,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to join room." });
	}
};

module.exports = {
	createRoom,
	getRooms,
	joinRoom,
	showList,
};
