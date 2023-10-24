import React from 'react'
import Post from './Post'
export default function TypeSelector(props) {
  return (
    <div className='conainer mx-3' >
      <input value={props.value} onClick={()=>props.buttonstate(props.value)} name='select' id={props.label} type="radio" />
      <label for={props.label} >{props.label}</label>
    </div>
  )
}
