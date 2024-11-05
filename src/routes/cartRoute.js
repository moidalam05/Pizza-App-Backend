import express from "express";
import { getCartById } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.get("/:id", getCartById);

export default cartRouter;
