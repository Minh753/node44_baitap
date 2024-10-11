import express from "express";
import { placeOrder } from "../controllers/order.controller.js";

const orderRoutes = express.Router();

orderRoutes.post("/order", placeOrder);

export default orderRoutes;
