import { Orders } from "../../models/orders-model.js";

describe("Testing-orders-model", () => {
  const o = new Orders();

  it("CurrentOrderByUserId id=s defined ", async () => {
    expect(o.CurrentOrderByUserId).toBeDefined();
  });
});
