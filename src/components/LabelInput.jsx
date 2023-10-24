import React from "react";
import "./LabelInput.css";
export default function LabelInput(props) {
  return (
    <div className="flexbox">
      <label htmlFor={props.label}>{props.label}</label>
      <input
      onChange={(e)=>props.set(e.target.value)}
        className="textbox"
        id={props.label}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}
