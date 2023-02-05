import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import orderRoutes from "./handlers/OrdersHandler.js";
import productRoutes from "./handlers/ProductsHandler.js";
import userRoutes from "./handlers/UsersHandler.js";
import cors from "cors";
const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());
const corsOption = {
  optionsSuccessStatus: 200,
};
app.use(cors(corsOption));
app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

orderRoutes(app);
productRoutes(app);
userRoutes(app);

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
