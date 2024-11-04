import express from "express";
import serverConfig from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";
const app = express();

app.listen(serverConfig.PORT, async () => {
	console.log(`Server is running on port ${serverConfig.PORT}`);
	await connectDB();
});
