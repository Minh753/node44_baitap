import express from "express";
import {
  rateRestaurant,
  getRatingsByRestaurant,
  getRatingsByUser,
} from "../controllers/rate.controller.js";

const rateRoutes = express.Router();

rateRoutes.post("/rate", rateRestaurant);
rateRoutes.get("/restaurant/:restaurant_id/ratings", getRatingsByRestaurant);
rateRoutes.get("/user/:user_id/ratings", getRatingsByUser);

export default rateRoutes;
