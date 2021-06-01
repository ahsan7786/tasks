const express = require("express");
const SubTask = require("../dao/subtask.dao");
const todoRoutes = express.Router();

todoRoutes.post("/create", async (req, res) => {
  let subTaskObject = {
    status: false,
    createdAt: new Date(),
  };
  const { todo_id, title } = req.body;
  subTaskObject = { ...subTaskObject, title: title, TodoId: todo_id };
  try {
    let response = await SubTask.createSubTask(subTaskObject);
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
    let response = await SubTask.updateSubTask({ status: status }, id);
    if (response.length == 1) {
      res.status(200);
      res.json({ message: "updated successfully" });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: err.message });
  }
});

module.exports = todoRoutes;
