const request = require("supertest");
const app = require("../../index");

describe("Todo Controller verification end point", () => {
  let id;

  it("get all todos", async () => {
    await request(app)
      .get("/todos")
      .expect(200);
  });
  it("create new todos", async () => {
    const data = { title: "automated call for todo" };

    await request(app)
      .post("/todos/create")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        if (res.body.payload) id = res.body.payload;
      });
  });

  it("create update todos", async () => {
    const data = { status: true, id: id };
    await request(app)
      .put("/todos/update")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
