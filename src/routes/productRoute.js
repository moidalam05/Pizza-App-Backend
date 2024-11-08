import express from "express";
import {
	addProduct,
	getProduct,
	deleteProduct,
} from "../controllers/productController.js";
import uploader from "../middlewares/multerMiddleware.js";

const productRouter = express.Router();

productRouter.post("/add", uploader.single("productImage"), addProduct);
productRouter.get("/:id", getProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
