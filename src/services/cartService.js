import { getCartByUserId } from "../repositories/cartRepository.js";
import NotFoundError from "../utils/notFoundError.js";

async function getCart(userId) {
	const cart = await getCartByUserId(userId);

	if (!cart) {
		throw new NotFoundError("Cart");
	}

	return cart;
}

export { getCart };
