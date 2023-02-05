import { Users, rUser, User } from "../models/users-model.js";
import verifyAuthToken from "./verify-auth.js";
import jwt from "jsonwebtoken";
import { Response, Request, Router, Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const newUser: Users = new Users();

const getAllUsers = async (req: Request, res: Response) => {
  const users = await newUser.index();
  res.json(users);
};

const getUserById = async (req: Request, res: Response) => {
  const user = await newUser.show(parseInt(req.params.id));
  res.json(user);
};

const createUser = async (req: Request, res: Response) => {
  try {
    const userc: rUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
    };
    const u: User = await newUser.create(userc);
    var j = jwt.sign({ user: u }, <string>process.env.TOKEN_SECRET);
    res.status(200).json({ l: j });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export default (app: Application) => {
  app.use(bodyParser.json());
  console.log("feuhufh");
  app.get("/users", verifyAuthToken, getAllUsers);
  app.get("/users/:id", verifyAuthToken, getUserById);
  app.post("/users", createUser);
};
