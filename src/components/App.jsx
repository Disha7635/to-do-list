import React, { useState } from "react";
import Todoitem from "./Todoitem";
import InputArea from "./InputArea";
function App() {
  const [Item_list, setItemlist] = useState([]);
  function onclick(item) {
    setItemlist(() => {
      return [...Item_list, item];
    });
  }
  function deleteItem(id) {
    setItemlist(() => {
      return Item_list.filter((item, index) => {
        return index !== id;
      });
    });
  }
  console.log(Item_list);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onclicked={onclick} />
      <div>
        <ul>
          {Item_list.map((x, index) => (
            <Todoitem item={x} key={index} id={index} onchecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
