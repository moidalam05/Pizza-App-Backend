import Cart from "../schema/cartSchema.js";
import BadRequestError from "../utils/badRequestError.js";
import InternalServerError from "../utils/internalServerError.js";

async function createCart(userId) {
	try {
		const newCart = await Cart.create({
			user: userId,
		});
		return newCart;
	} catch (error) {
		if (error.name === "ValidationError") {
			const errorMessageList = Object.keys(error.errors).map(
				(property) => {
					return error.errors[property].message;
				}
			);

			throw new BadRequestError(errorMessageList);
		}
		console.log(error);
		throw new InternalServerError();
	}
}

async function getCartByUserId(userId) {
	try {
		const cart = await Cart.findOne({
			user: userId,
		});
		return cart;
	} catch (error) {
		console.log(error);
		throw new InternalServerError();
	}
}

export { createCart, getCartByUserId };
