import jwt from "jsonwebtoken";
import serverConfig from "../config/serverConfig.js";

async function isLoggedIn(req, res, next) {
	// Get the token from the request
	const token = req.cookies["authToken"];

	// Check if the token is present in the request or not
	if (!token) {
		return res.status(401).json({
			success: false,
			message: "Auth Token not found",
			data: {},
			error: "Not authenticated user",
		});
	}

	// If the token is present then verify the token
	const decoded = jwt.verify(token, serverConfig.JWT_SECRET);

	// If the token is invalid then return the response
	if (!decoded) {
		return res.status(401).json({
			success: false,
			message: "Invalid Token Provided",
			data: {},
			error: "Not authenticated",
		});
	}

	// If the token is valid then pass the control to the next middleware
	req.user = {
		email: decoded.email,
		id: decoded.id,
	};

	next();
}

export { isLoggedIn };
