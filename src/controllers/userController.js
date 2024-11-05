import { UserService } from "../services/userService.js";
import { UserRepository } from "../repositories/userRepository.js";

export async function createUser(req, res) {
	console.log(req.body);

	const userService = new UserService(new UserRepository());

	try {
		const response = await userService.registerUser(req.body);

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
