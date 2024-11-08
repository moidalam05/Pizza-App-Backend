import cloudinary from "../config/cloudinaryConfig.js";
import { createProduct } from "../repositories/productRepository.js";
import fs from "fs/promises";

async function CreateProduct(productDetails) {
	const imagePath = productDetails.imagePath;
	if (imagePath) {
		try {
			const cloudinaryResponse = await cloudinary.uploader.upload(
				imagePath
			);
			var productImage = cloudinaryResponse.secure_url;
			await fs.unlink(imagePath);
		} catch (error) {
			console.log(error);
			throw { reason: "Image upload failed", statusCode: 500 };
		}
	}

	const product = await createProduct({
		...productDetails,
		productImage,
	});

	if (!product) {
		throw { reason: "Product not created", statusCode: 500 };
	}

	return product;
}

export { CreateProduct };
