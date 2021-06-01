import React from "react";
import "./../scss/TodoList.css";
import ListItem from "./../components/ListItem/ListItem";
import cloneDeep from "lodash/cloneDeep";

export default function TodoList({ list, onListChange }) {
  const handleListItemChange = (updatedItem) => {
    let currentItemIndex = list.findIndex((item) => item.id === updatedItem.id);
    let duplicateList = cloneDeep(list);
    duplicateList[currentItemIndex] = updatedItem;
    onListChange(duplicateList);
  };

  return (
    <div className="list-container">
      <div
        style={{
          width: "100%",
          height: "inherit",
          overflowY: "auto",
        }}
      >
        {list.map((listItem) => (
          <ListItem
            key={listItem.id}
            listItem={listItem}
            onListItemChange={handleListItemChange}
          />
        ))}
      </div>
    </div>
  );
}
