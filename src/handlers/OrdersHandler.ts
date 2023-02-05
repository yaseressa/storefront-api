import { Orders, Order } from "../models/orders-model.js";
import verifyAuthToken from "./verify-auth.js";
import { Response, Request, Router, Application } from "express";
const newOrder: Orders = new Orders();

const currentOrder = async (req: Request, res: Response) => {
  const user_id: number = parseInt(req.params.id);
  const currentOrder: Order = await newOrder.CurrentOrderByUserId(user_id);
  return res.json(currentOrder);
};

export default (app: Application) => {
  app.get("/current/:id", verifyAuthToken, currentOrder);
};
