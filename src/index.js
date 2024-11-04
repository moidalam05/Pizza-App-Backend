import express from "express";
import bodyParser from "body-parser";

import serverConfig from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.listen(serverConfig.PORT, async () => {
	console.log(`Server is running on port ${serverConfig.PORT}`);
	await connectDB();
});
