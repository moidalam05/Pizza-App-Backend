import { getCart } from "../services/cartService.js";
import AppError from "../utils/appError.js";

async function getCartByUser(req, res) {
	try {
		const cart = await getCart(req.user.id);
		return res.status(200).json({
			success: true,
			message: "Cart found successfully",
			data: cart,
			error: {},
		});
	} catch (error) {
		console.log(error);
		if (error instanceof AppError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
				data: {},
				error: error,
			});
		}
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
			data: {},
			error: error,
		});
	}
}

export { getCartByUser };
