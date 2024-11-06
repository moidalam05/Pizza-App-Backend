import { loginUser } from "../services/authService.js";

async function login(req, res) {
	try {
		const loginPayload = req.body;
		const response = await loginUser(loginPayload);
		res.status(200).json({
			success: true,
			message: "User logged in successfully",
			data: response,
			error: {},
		});
	} catch (error) {
		res.status(error.statusCode).json({
			success: false,
			message: error.message,
			data: {},
			error: error,
		});
	}
}

export { login };
