const express = require("express");
const Todo = require("../dao/todo.dao");
const SubTask = require("../dao/subtask.dao");

const todoRoutes = express.Router();

todoRoutes.get("/", async (req, res) => {
  try {
    let todoData = await Todo.findAll();
    res.status(200);
    res.json(todoData);
  } catch (err) {
    res.status(500);
    res.json({ message: err.message });
  }
});

todoRoutes.post("/create", async (req, res) => {
  let todoObject = {
    status: false,
    createdAt: new Date(),
  };
  let todoJson = req.body;
  todoObject = { ...todoObject, title: todoJson.title };
  try {
    let response = await Todo.createTodo(todoObject);
    if (response.id) {
      res.status(200);
      res.json({ message: "Successfully Created", payload: response.id });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: err.message });
  }
});
todoRoutes.put("/update", async (req, res) => {
  const { status, id } = req.body;
  try {
    let response = await Todo.updateTodo({ status: status }, id);
    if (response.length == 1) {
      if (status) {
        let subTask = await SubTask.findAllSubTask({ TodoId: id });
        subTask.map(async (task) => {
          await SubTask.updateSubTask({ ...task, status: true }, task.id);
        });
      }
      res.status(200);
      res.json({ message: "updated successfully" });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: err.message });
  }
});

module.exports = todoRoutes;
