import React, { useState, useEffect } from "react";
import "./../scss/App.css";
import TodoList from "./TodoList";
import Grid from "@material-ui/core/Grid";
import Input from "./../components/Input/Input";
import Label from "./../components/Label/Label";
import Button from "./../components/Button/Button";
// import dummyData from './../constants/dummyData.json';
import cloneDeep from "lodash/cloneDeep";
import CircularProgress from "@material-ui/core/CircularProgress";
import webApiUtils from "./../utils/webApiUtils";

function App() {
  const [list, updateList] = useState();
  // const [list, updateList] = useState(dummyData);
  const [title, updateTitle] = useState(null);

  const fetchData = () => {
    let result = webApiUtils.getList();

    result
      .then(function(response) {
        updateList(response.data);
      })
      .catch(function(error) {
        // handle error
        alert("unable to load Data");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateList = (newList) => {
    updateList(newList);
    console.log(newList);
  };

  const addNewItem = () => {
    if (title && title !== "") {
      let result = webApiUtils.createTask(title);

      result
        .then(function(response) {
          // handle success
          let payloadId = response.data.payload;
          const newTodo = {
            id: payloadId,
            title: title,
            status: false,
            createdAt: new Date().toISOString(),
            Tasks: [],
          };
          const duplicateList = cloneDeep(list);
          duplicateList.push(newTodo);
          updateList(duplicateList);
          updateTitle("");
        })
        .catch(function(error) {
          // handle error
          alert("unable to create task");
        });
    }
  };

  return list ? (
    <div className="App">
      <Grid container className="container-grid">
        <Grid item xs={12} sm={4} m={4} className="center-item-grid">
          <div className="header-container">
            <Label className="header-label">Todo App</Label>
          </div>

          <div className="add-description-container">
            <div className="description-field-wrapper">
              <Input
                placeholder="What to do ?"
                value={title}
                onChange={(event) => updateTitle(event.target.value)}
              />
            </div>
            <div className="add-button-wrapper">
              <Button
                className="add-button"
                onClick={(event) => addNewItem(event)}
              >
                New List
              </Button>
            </div>
          </div>

          <TodoList list={list} onListChange={handleUpdateList} />
        </Grid>
      </Grid>
    </div>
  ) : (
    <div className="circular-progress-wrapper">
      <CircularProgress />
    </div>
  );
}

export default App;
