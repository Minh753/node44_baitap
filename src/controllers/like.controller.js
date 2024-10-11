import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { INTERNAL_SERVER, OK } from "../../const.js";

const model = initModels(sequelize);

const likeRestaurant = async (req, res) => {
  try {
    const { user_id, restaurant_id } = req.body;
    const like = await model.like_res.findOrCreate({
      where: { user_id, restaurant_id },
    });
    res.status(201).json({ messge: "Like successfully", like });
  } catch (error) {
    res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};
const unlikeRestaurant = async (req, res) => {
  try {
    const { user_id, restaurant_id } = req.body;
    const result = await model.like_res.destroy({
      where: { user_id, restaurant_id },
    });
    if (result) res.status(OK).json({ message: "Unliked successfully" });
    else res.status(404).json({ message: "Like not found" });
  } catch (error) {
    res
      .status(INTERNAL_SERVER)
      .json({ message: "Error while unliking the restaurant" });
  }
};
const getLikesByRestaurant = async (req, res) => {
  try {
    const { restaurant_id } = req.params;
    const likes = await model.like_res.findAll({
      where: { restaurant_id },
      include: [{ model: model.users, attributes: ["id", "name"] }],
    });
    res.status(OK).json(likes);
  } catch (error) {
    res.status(INTERNAL_SERVER).json({ message: "Error while fetching likes" });
  }
};
const getLikesByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const likes = await model.like_res.findAll({
      where: { user_id },
      include: [{ model: model.restaurant, attributes: ["id", "name"] }],
    });
    res.status(OK).json(likes);
  } catch (error) {
    res
      .status(INTERNAL_SERVER)
      .json({ message: "Error while fetching liked restaurants" });
  }
};
export {
  likeRestaurant,
  unlikeRestaurant,
  getLikesByRestaurant,
  getLikesByUser,
};
