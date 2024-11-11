import express from "express";
import { getCartByUser } from "../controllers/cartController.js";
import { isLoggedIn } from "../validation/authValidator.js";

const cartRouter = express.Router();

cartRouter.get("/", isLoggedIn, getCartByUser);

export default cartRouter;
