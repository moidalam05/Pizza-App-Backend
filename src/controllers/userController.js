import { registerUser } from "../services/userService.js";

async function createUser(req, res) {
	console.log(req.body);

	try {
		const response = await registerUser(req.body);

		return res.status(201).json({
			message: "User created successfully",
			success: true,
			data: response,
			error: {},
		});
	} catch (error) {
		return res.status(error.statusCode).json({
			message: error.reason,
			success: false,
			data: {},
			error: error,
		});
	}
}

export { createUser };
