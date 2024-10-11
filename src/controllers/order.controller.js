import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { INTERNAL_SERVER } from "../../const.js";

const model = initModels(sequelize);

const placeOrder = async (req, res) => {
  try {
    const { user_id, food_id, quantity } = req.body;
    const order = await model.orders.create({
      user_id,
      food_id,
      quantity,
    });
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(INTERNAL_SERVER).json({ message: "Error while placing order" });
  }
};

export { placeOrder };
