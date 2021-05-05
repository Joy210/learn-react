import React from "react";
import "./ReactColor.css";

function ReactColor({ title, color, onChange }) {
  return (
    <>
      <label>{title}</label>
      <div className="input-group p-2 border">
        <input type="color" value={color} onChange={onChange} />
        <span className="ml-2"> {color} </span>
      </div>
    </>
  );
}

export default ReactColor;
