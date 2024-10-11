import express from "express";
import {
  getLikesByRestaurant,
  getLikesByUser,
  likeRestaurant,
  unlikeRestaurant,
} from "../controllers/like.controller.js";

const likeRoutes = express.Router();
likeRoutes.post("/like", likeRestaurant);
likeRoutes.delete("/unlike", unlikeRestaurant);
likeRoutes.get("/restaurant/:restaurant_id/likes", getLikesByRestaurant);
likeRoutes.get("/user/:user_id/likes", getLikesByUser);
export default likeRoutes;
