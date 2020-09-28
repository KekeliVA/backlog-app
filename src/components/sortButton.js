import React from "react";

function SortButton(props) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
}

export default SortButton;