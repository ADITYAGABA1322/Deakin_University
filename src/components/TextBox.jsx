import React from "react";
import "./TextBox.css";
export default function TextBox(props) {
  return (
    <div>
      <label htmlFor={props.label} margin-bottom="20px">
        {props.label}
      </label>
      <div className="flexbox">
        <textarea
          className="textareabox"
          onChange={(e)=>props.set(e.target.value)}
          id={props.label}
          placeholder={props.placeholder}
          rows={props.rows}
        ></textarea>
      </div>
    </div>
  );
}
