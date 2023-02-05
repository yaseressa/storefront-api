import Client from "../database.js";

export type Order = {
  id?: number;
  product_id: number;
  quantity: number;
  user_id: number;
  status: string;
};

export class Orders {
  async CurrentOrderByUserId(userId: number): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql =
        "SELECT * FROM Orders WHERE user_id = ($1) ORDER BY id DESC LIMIT 1";
      const result = await conn.query(sql, [userId]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`couldn't get the current order. Error: ${err}`);
    }
  }
}
