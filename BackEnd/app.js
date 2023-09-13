const Express = require("express");
require("dotenv").config();

const UserRoute = require('./Routes/Users')

const connectDB = require("./DB/connect");
const cors = require('cors');
const app = Express(); 
 
app.use(cors());



app.use(Express.json());
app.use('/users', UserRoute)



const PORT = process.env.PORT||3011
async function serverStart() {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`server listening on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}
serverStart();
