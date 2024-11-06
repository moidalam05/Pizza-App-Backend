import dotenv from "dotenv";
dotenv.config();

export default {
	PORT: process.env.PORT || 3000,
	MONGODB_URI: process.env.MONGODB_URI,
	JWT_SECRET: process.env.SECRET_KEY,
	JWT_EXPIRY: process.env.JWT_EXPIRY,
};
