const db = require("../dbconfig/connection");

const createSubTask = async (subTaskObject) => {
  let data;
  try {
    data = await db.SubTask.create(subTaskObject);
    return data.dataValues;
  } catch (err) {
    throw new Error("Error while creating SubTask");
  }
};

const updateSubTask = async (subTaskObject, Id) => {
  let data;
  try {
    data = await db.SubTask.update(subTaskObject, { where: { id: Id } });
    return data;
  } catch (err) {
    throw new Error("Error while updating todo");
  }
};
const findSubTask = async (criteria) => {
  let data;
  try {
    data = await db.SubTask.findOne({ where: { ...criteria } });
    return data.dataValues;
  } catch (err) {
    throw new Error("Error while updating subTask");
  }
};

const findAllSubTask = async (criteria) => {
  let data;
  try {
    data = await db.SubTask.findAll({ where: { ...criteria } });
    return data.map((record) => record.dataValues);
  } catch (err) {
    throw new Error("Error while updating subTask");
  }
};

module.exports = {
  createSubTask,
  updateSubTask,
  findAllSubTask,
  findSubTask,
};
