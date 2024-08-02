import React, { useState } from "react";
export default function Todoitem(props) {
  return (
    <li
      onClick={() => {
        props.onchecked(props.id);
      }}
      // style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
}
