const Todos = require("../dao/todo.dao");
const SubTask = require("../dao/subtask.dao");

describe("SubTask verfication", () => {
  let todo = {
    title: "dummy todo subtask",
    status: false,
    createdAt: new Date("2021-05-01"),
  };

  it("create new todo subtask successfully", async () => {
    let res = await Todos.createTodo(todo);
    res = await SubTask.createSubTask({ ...todo, TodoId: res.id });
    expect(res).toMatchObject(todo);
  });

  it("create new todo subtask unsuccessfully with wrong schema  ", async () => {
    let subTaskWithError = {
      falseTemplate: "test",
    };
    try {
      let res = await SubTask.createSubTask({ ...subTaskWithError });
    } catch (err) {
      expect(err.message).toBe("Error while creating SubTask");
    }
  });
  it("update Sub Task", async () => {
    let updatedTodo = {
      ...todo,
      title: "updated dummy subTask",
    };
    let resultantDataSet = await SubTask.findSubTask(todo);
    resultantrowsUpdatedCount = await SubTask.updateSubTask(
      updatedTodo,
      resultantDataSet.id
    );
    expect(resultantrowsUpdatedCount[0]).toBe(1);
  });
  it("find All subTask", async () => {
    let resultantDataSet = await SubTask.findAllSubTask();
    expect(resultantDataSet.length).toBeGreaterThan(0);
  });
});
