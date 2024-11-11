import express from "express";
import {
	addProduct,
	getProduct,
	deleteProduct,
} from "../controllers/productController.js";
import uploader from "../middlewares/multerMiddleware.js";
import { isAdmin, isLoggedIn } from "../validation/authValidator.js";

const productRouter = express.Router();

productRouter.post(
	"/add",
	isLoggedIn,
	isAdmin,
	uploader.single("productImage"),
	addProduct
);
productRouter.get("/:id", getProduct);
productRouter.delete("/:id", isLoggedIn, isAdmin, deleteProduct);

export default productRouter;
