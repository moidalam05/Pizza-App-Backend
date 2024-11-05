export class UserService {
	constructor(_userRepository) {
		this.userRepository = _userRepository;
	}

	async registerUser(userDetails) {
		const user = await this.userRepository.findUser({
			email: userDetails.email,
			mobileNumber: userDetails.mobileNumber,
		});

		if (user) {
			throw {
				reason: "User with this email or mobileNumber already exists",
				statusCode: 400,
			};
		}

		const newUser = await this.userRepository.createUser({
			email: userDetails.email,
			mobileNumber: userDetails.mobileNumber,
			firstName: userDetails.firstName,
			lastName: userDetails.lastName,
			password: userDetails.password,
		});

		if (!newUser) {
			throw {
				reason: "something went wrong, cannot create user",
				statusCode: 500,
			};
		}
		return newUser;
	}
}
