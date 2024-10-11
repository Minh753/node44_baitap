import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { INTERNAL_SERVER, OK } from "../../const.js";

const model = initModels(sequelize);

const rateRestaurant = async (req, res) => {
  try {
    const { user_id, restaurant_id, rating, comment } = req.body;
    const rate = await model.rate_res.create({
      user_id,
      restaurant_id,
      rating,
      comment,
    });
    res.status(201).json({ message: "Rated successfully", rate });
  } catch (error) {
    res
      .status(INTERNAL_SERVER)
      .json({ message: "Error while rating the restaurant" });
  }
};

const getRatingsByRestaurant = async (req, res) => {
  try {
    const { restaurant_id } = req.params;
    const ratings = await model.rate_res.findAll({
      where: { restaurant_id },
      include: [{ model: model.users, attributes: ["id", "name"] }],
    });
    res.status(OK).json(ratings);
  } catch (error) {
    res
      .status(INTERNAL_SERVER)
      .json({ message: "Error while fetching ratings" });
  }
};

const getRatingsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const ratings = await model.rate_res.findAll({
      where: { user_id },
      include: [{ model: model.restaurant, attributes: ["id", "name"] }],
    });
    res.status(OK).json(ratings);
  } catch (error) {
    res
      .status(INTERNAL_SERVER)
      .json({ message: "Error while fetching user ratings" });
  }
};

export { rateRestaurant, getRatingsByRestaurant, getRatingsByUser };
