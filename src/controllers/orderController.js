import { createOrder } from "../services/orderService.js";
import AppError from "../utils/appError.js";

async function createNewOrder(req, res) {
	try {
		const order = await createOrder(req.user.id, req.body.paymentMethod);

		return res.status(201).json({
			success: true,
			message: "Order created successfully",
			data: order,
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

export { createNewOrder };
