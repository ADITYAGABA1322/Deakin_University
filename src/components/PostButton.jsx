import React from 'react'
import "./PostButton.css"
export default function PostButton(props) {
  return (
    <div className="container" >
      <button onClick={props.handleClick} className='postbutton'>
        Post
      </button>
    </div>
  )
}
