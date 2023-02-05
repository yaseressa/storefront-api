import supertest from "supertest";
import app from "../index.spec.js";
import dotenv from "dotenv";
dotenv.config();
const request = supertest(app);

describe("Testing PRODUCTS endpoint", () => {
  it("create product", async () => {
    const response = await request
      .post("/products")
      .send({
        name: "p",
        price: "21",
        category: "food",
      })
      .set("Authorization", "Bearer " + process.env.TOKEN_TEST);
    console.log(response);
    expect(response.status).toBe(200);
  });

  it("testing index route", async () => {
    const response = await request.get("/products");
    return expect(response.status).toBe(200);
  });

  it(" testing show route STATUS 200", async () => {
    const response = await request
      .get("/products/1")
      .set("authorization", "Bearer " + process.env.TOKEN_TEST);
    expect(response.status).toBe(200);
  });
});
