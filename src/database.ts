import pkg from "pg";
import * as dotenv from "dotenv";
const { Pool } = pkg;
dotenv.config();
export default new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});
