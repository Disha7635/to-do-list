import React, { useState } from "react";
export default function InputArea(props) {
  const [item, setItem] = useState("");
  function onchange(event) {
    setItem(event.target.value);
  }
  return (
    <div className="form">
      <input type="text" onChange={onchange} value={item} />
      <button
        onClick={() => {
          props.onclicked(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
