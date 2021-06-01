const express = require("express");
const todoController = require("./controllers/todo.controller");
const subTaskController = require("./controllers/subtask.controller");
const app = express();
const port = process.env.PORT || 3000;
app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/todos", todoController);
app.use("/subtask", subTaskController);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Backend is  listening at http://localhost:${port}`);
  });
}

module.exports = app;
