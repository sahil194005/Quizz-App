
const Express = require("express");
const app = Express();
require("dotenv").config();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
	cors: { origin: "*" },
});

io.on("connection", (socket) => {
	socket.on("createRoom", (roomData) => {
		io.emit("newRoomCreated", roomData);
	});
	socket.on("joinRoom", (roomData) => {
		io.emit("joinedRoom", roomData);
	});
	socket.on('quizStart', (socketObj) => {
		
		io.emit("quizStarted", socketObj);
	});
	socket.on('updateResult', (newResult) => {
		
		io.emit("UpdateResult",newResult)
	})

});

const UserRoute = require("./Routes/Users");
const RoomRoute = require("./Routes/Room");
const QuestionsRoute = require("./Routes/questions");
const QuizzRoute = require('./Routes/quizz');

const connectDB = require("./DB/connect");
const cors = require("cors");

app.use(cors());

app.use(Express.json());
app.use("/users", UserRoute);
app.use("/room", RoomRoute);
app.use("/questions", QuestionsRoute);
app.use("/quizz", QuizzRoute);

const PORT = process.env.PORT || 3011;
async function serverStart() {
	try {
		await connectDB();
		http.listen(PORT, () => {
			console.log(`server listening on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}
serverStart();
