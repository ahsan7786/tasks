import axios from "axios";
import * as _ from "../constants/TodoConstants";

export default {
  getList: () => {
    let url = `${_.baseUrl}todos/`;
    let promise = axios.get(url);

    return promise;
  },

  // create new task
  createTask: (title) => {
    let url = `${_.baseUrl}todos/create`;
    let result = axios.post(url, {
      title: title,
    });
    return result;
  },

  createSubTask: (title, todoId) => {
    let url = `${_.baseUrl}subtask/create`;
    let result = axios.post(url, {
      title: title,
      todo_id: todoId,
    });
    return result;
  },
  updateTaskStatus: (id, status) => {
    // make netwwork call here
    let url = `${_.baseUrl}todos/update`;
    let result = axios.put(url, {
      id: id,
      status: status,
    });
    return result;
  },

  updateSubtaskStatus: (id, status) => {
    // make netwwork call here
    let url = `${_.baseUrl}subtask/update`;
    let result = axios.put(url, {
      id: id,
      status: status,
    });
    return result;
  },
};
