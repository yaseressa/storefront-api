import { Products } from "../../models/products-model.js";

describe("Testing Products model", () => {
  const p = new Products();

  it("index method is defined ", async () => {
    expect(p.index).toBeDefined();
  });

  it("show method is defined ", async () => {
    expect(p.show).toBeDefined();
  });

  it("create method is defined ", async () => {
    expect(p.create).toBeDefined();
  });
});
