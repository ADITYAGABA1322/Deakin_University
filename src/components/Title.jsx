import React from 'react'
import LabelInput from "./LabelInput";
export default function Title(props) {
  return (
    <div>
      <LabelInput label="Title" set={props.set}  placeholder={props.placeholder}/>
    </div>
  )
}
