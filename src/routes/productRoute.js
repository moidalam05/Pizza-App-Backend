import express from "express";
import { addProduct } from "../controllers/productController.js";
import uploader from "../middlewares/multerMiddleware.js";

const productRouter = express.Router();

productRouter.post("/add", uploader.single("productImage"), addProduct);

export default productRouter;
