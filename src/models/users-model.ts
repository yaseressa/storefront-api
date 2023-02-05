import Client from "../database.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
//dotenv.config();
export type rUser = {
  firstname: string;
  lastname: string;
  password: string;
};
export type User = {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
};
export class Users {
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM Users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get all users. Error: ${err}`);
    }
  }

  async show(userId: number): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM Users WHERE id = $1`;
      const result = await conn.query(sql, [userId]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get user by id. Error: ${err}`);
    }
  }

  async create(user: rUser): Promise<User> {
    try {
      const { firstname, lastname, password } = user;
      const pepper: string = <string>process.env.BCRYPT_PASSWORD;
      const salt: string = <string>process.env.SALT_ROUNDS;
      const passDigest: string = bcrypt.hashSync(
        pepper + password,
        parseInt(salt)
      );
      const conn = await Client.connect();
      const sql: string = `INSERT INTO Users(firstname, lastname, password) VALUES($1, $2, $3) RETURNING *`;
      // @ts-ignore
      const result: User = await conn.query(sql, [
        firstname,
        lastname,
        passDigest,
      ]);
      conn.release();
      //@ts-ignore
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create user. Error: ${err}`);
    }
  }
}
