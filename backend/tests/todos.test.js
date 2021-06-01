const Todos = require("../dao/todo.dao");

describe("todos verfication", () => {
  let todo = {
    title: "dummy todo",
    status: false,
    createdAt: new Date("2021-05-01"),
  };

  it("create new todo successfully", async () => {
    let res = await Todos.createTodo(todo);
    expect(res).toMatchObject(todo);
  });

  it("create new todo unsuccessfully with wrong schema  ", async () => {
    let todoWithError = {
      falseTemplate: "test",
    };
    try {
      let res = await Todos.createTodo(todoWithError);
    } catch (err) {
      expect(err.message).toBe("Error while creating Todo");
    }
  });
  it("update todo", async () => {
    let updatedTodo = {
      ...todo,
      title: "updated dummy todo",
    };
    let resultantDataSet = await Todos.findTodo(todo);
    resultantrowsUpdatedCount = await Todos.updateTodo(
      updatedTodo,
      resultantDataSet.id
    );
    expect(resultantrowsUpdatedCount[0]).toBe(1);
  });
  it("find one todo ", async () => {
    let updatedTodo = {
      ...todo,
      title: "updated dummy todo",
    };
    let resultantDataSet = await Todos.findTodo(updatedTodo);
    expect(resultantDataSet).toMatchObject(updatedTodo);
  });

  it("find All todos ", async () => {
    let resultantDataSet = await Todos.findAll();
    console.log(resultantDataSet[0]);
    expect(resultantDataSet.length).toBeGreaterThan(0);
  });
});
