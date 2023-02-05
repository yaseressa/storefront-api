import { Response, Request, Router, Application, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
export default (req: Request, res: Response, next: NextFunction) => {
  try {
    //@ts-ignore
    const authorizationHeader: string = req.headers.authorization;
    const token = authorizationHeader.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, <string>process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(401);
  }
};
