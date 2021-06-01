const request = require("supertest");
const app = require("../../index");

describe("Sub Task Controller verification End points", () => {
  let todo_id;
  let task_id;

  beforeAll(async () => {
    const data = { title: "automated call for todo sub task" };
    await request(app)
      .post("/todos/create")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        if (res.body.payload) todo_id = res.body.payload;
      });
  });

  it("create sub task ", async () => {
    const data = { title: "automated call for  sub task", todo_id: todo_id };
    await request(app)
      .post("/subtask/create")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        if (res.body.payload) task_id = res.body.payload;
      });
  });
  it("update sub task ", async () => {
    const data = { status: true, id: task_id };
    await request(app)
      .put("/subtask/update")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
