import React, { useState } from 'react';
import './Card.css'; // Import your CSS file

export default function ArticleCard(props) {
  let { title, abstract, desc, date, index, tags } = props;

  return (
    <div className="card my-5">
      <h3 className="mx-2">Article {index + 1}</h3>
      <div className="badge-container">
        <span className="badge rounded-pill bg-danger">{tags}</span>
      </div>
      <div className="card-body" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={`#i${props.index}`}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{abstract}</p>
        <p className="card-text">
        <p className="card-text">Posted By-{props.author}</p>
          <small className="text-muted">Date: {date}</small>
        </p>
      </div>
      <div id={`i${props.index}`} className="accordion-collapse collapse">
        <div className="accordion-body">
            <p>
              Description - {desc}
            </p>
        </div>
      </div>
    </div>
  );
}
