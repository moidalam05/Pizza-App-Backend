import { CreateProduct } from "../services/productService.js";

async function addProduct(req, res) {
	try {
		const product = await CreateProduct({
			productName: req.body.productName,
			description: req.body.description,
			imagePath: req.file.path,
			price: req.body.price,
			inStock: req.body.inStock,
			category: req.body.category,
			size: req.body.size,
		});
		return res.status(201).json({
			success: true,
			message: "Product created successfully",
			data: product,
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(error.statusCode).json({
			success: false,
			message: error.reason,
			data: {},
			error: error,
		});
	}
}

export { addProduct };
