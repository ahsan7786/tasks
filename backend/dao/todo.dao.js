const db = require("../dbconfig/connection");

const createTodo = async (todoObject) => {
  let data;
  try {
    data = await db.Todo.create(todoObject, { include: [db.SubTask] });
    return data.dataValues;
  } catch (err) {
    throw new Error("Error while creating Todo");
  }
};

const updateTodo = async (todoObject, Id) => {
  let data;
  try {
    data = await db.Todo.update(todoObject, { where: { id: Id } });
    return data;
  } catch (err) {
    throw new Error("Error while updating todo");
  }
};

const findTodo = async (criteria) => {
  let data;
  try {
    data = await db.Todo.findOne({
      where: { ...criteria },
      include: [db.SubTask],
    });
    return data.dataValues;
  } catch (err) {
    throw new Error("Error while updating subTask");
  }
};

const findAll = async () => {
  let data;
  try {
    data = await db.Todo.findAll({ include: [db.SubTask] });
    return data.map((record) => record.dataValues);
  } catch (err) {
    throw new Error("Error while updating subTask");
  }
};

module.exports = {
  createTodo,
  updateTodo,
  findTodo,
  findAll,
};
