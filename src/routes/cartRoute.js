import express from "express";
import {
	getCartByUser,
	modifyProductToCart,
} from "../controllers/cartController.js";
import { isLoggedIn } from "../validation/authValidator.js";

const cartRouter = express.Router();

cartRouter.get("/", isLoggedIn, getCartByUser);
cartRouter.post("/:operation/:productId", isLoggedIn, modifyProductToCart);

export default cartRouter;
