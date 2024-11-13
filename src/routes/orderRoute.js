import express from "express";
import { isLoggedIn } from "../validation/authValidator.js";
import { createNewOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", isLoggedIn, createNewOrder);

export default orderRouter;
