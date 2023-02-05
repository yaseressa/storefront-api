import Client from "../database.js";
export type rProduct = {
  name: string;
  price: string;
  category?: string;
};
export type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
};

export class Products {
  async index(): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM Products`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get all products. Error: ${err}`);
    }
  }

  async show(productId: number): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM Products WHERE id=$1`;
      const result = await conn.query(sql, [productId]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get product by id. Error: ${err}`);
    }
  }
  async create(product: rProduct): Promise<Product> {
    try {
      const { name, price, category } = product;
      const sql = `INSERT INTO Products (name, price, category) VALUES($1, $2, $3) RETURNING *`;
      const conn = await Client.connect();
      const result = await conn.query(sql, [name, price, category ?? ""]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create product. Error: ${err}`);
    }
  }
}
