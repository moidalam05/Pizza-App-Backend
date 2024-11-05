import User from "../schema/userSchema.js";

export class UserRepository {
	async findUser(parameters) {
		try {
			const response = await User.findOne({ ...parameters });
			return response;
		} catch (error) {
			console.log(error);
			throw {
				reason: "something went wrong, cannot find user",
				statusCode: 500,
			};
		}
	}

	async createUser(userDetails) {
		try {
			const response = await User.create(userDetails);
			return response;
		} catch (error) {
			console.log(error);
			throw {
				reason: "something went wrong, cannot create user",
				statusCode: 500,
			};
		}
	}
}
