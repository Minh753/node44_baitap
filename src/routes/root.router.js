import express from "express";
import likeRoutes from "./like.router.js";
import rateRoutes from "./rate.router.js";
import orderRoutes from "./order.router.js";

const rootRoutes = express.Router();
rootRoutes.use("/likes", likeRoutes);
rootRoutes.use("/rates", rateRoutes);
rootRoutes.use("/orders", orderRoutes);

export default rootRoutes;
