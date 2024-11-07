import express from "express";
import cookieParser from "cookie-parser";
import serverConfig from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import authRouter from "./routes/authRoute.js";
import uploader from "./middlewares/multerMiddleware.js";
import cloudinary from "./config/cloudinaryConfig.js";
import fs from "fs/promises";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/users", userRouter);
app.use("/carts", cartRouter);
app.use("/auth", authRouter);

app.post("/photo", uploader.single("photo"), async (req, res) => {
	console.log(req.file);
	const result = await cloudinary.uploader.upload(req.file.path);
	console.log("result from cloudinary", result);
	await fs.unlink(req.file.path);
	return res.json({ message: "Photo uploaded successfully" });
});

app.listen(serverConfig.PORT, async () => {
	console.log(`Server is running on port ${serverConfig.PORT}`);
	await connectDB();
});
