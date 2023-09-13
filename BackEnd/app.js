require("dotenv").config();


const Express = require("express");
const app = Express(); 
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });

io.on("connection", (socket) => {
	
	socket.on('createRoom', (roomData) => {
		// Handle room creation logic here
	
		// Emit an event to inform all connected clients about the new room
		io.emit('newRoomCreated', roomData);
	  });

	
});

const socketIO = require('socket.io');
const UserRoute = require('./Routes/Users')
const RoomRoute = require('./Routes/Room');

const connectDB = require("./DB/connect");
const cors = require('cors');
 
app.use(cors());



app.use(Express.json());
app.use('/users', UserRoute)
app.use('/room', RoomRoute)



const PORT = process.env.PORT||3011
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
