import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDOItem from "./ToDoItem";

function App() {
  const [item, Setitem] = useState([]);

  function SetText(state) {
    Setitem((previtem) => {
      return [...previtem, state];
    });
  }
  function DeleteItem(id) {
    Setitem((previtem) => {
      return previtem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div>
        <InputArea onAdd={SetText} />
        <ul>
          {item.map((todoitem, index) => (
            <ToDOItem
              key={index}
              id={index}
              text={todoitem}
              onChecked={DeleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
