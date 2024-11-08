import cloudinary from "../config/cloudinaryConfig.js";
import {
	createProduct,
	deleteProductById,
	getProductById,
} from "../repositories/productRepository.js";
import fs from "fs/promises";
import InternalServerError from "../utils/internalServerError.js";
import NotFoundError from "../utils/notFoundError.js";

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
			throw new InternalServerError();
		}
	}

	const product = await createProduct({
		...productDetails,
		productImage,
	});

	return product;
}

async function GetProduct(productId) {
	const response = await getProductById(productId);

	if (!response) {
		throw new NotFoundError("Product");
	}

	return response;
}

async function DeleteProduct(productId) {
	const response = await deleteProductById(productId);

	if (!response) {
		throw new NotFoundError("Product");
	}

	return response;
}

export { CreateProduct, GetProduct, DeleteProduct };
