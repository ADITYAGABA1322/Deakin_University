import React from 'react'

export default function GetAllAnswer(props) {
  return (
    <div>
        <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Solution{props.index+1}</div>
      {props.content}
    </div>
  </li>
    </div>
  )
}
