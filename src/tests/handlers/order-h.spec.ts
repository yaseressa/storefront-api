import supertest from "supertest";
import app from "../index.spec.js";
import dotenv from "dotenv";
dotenv.config();
const request = supertest(app);

describe("Testing ORDERS endpoint", () => {
  it(" testing show route STATUS 200", async () => {
    const response = await request
      .get("/orders/47")
      .set("authorization", "Bearer " + process.env.TOKEN_TEST);
    expect(response.status).toBe(404);
  });
});
