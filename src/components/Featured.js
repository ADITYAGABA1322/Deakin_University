import React from 'react';
import ImageInfo from './ImageInfo';
import styles from './Featured.css';

export default function Featured(props) {
  return (
    <div className='featured-container'>
      <h1 id='featuretitle'>{props.title}</h1>
      <div className='box'>
        {props.List.map((element, index) => (
          <ImageInfo
            key={index}
            title={element.Title}
            desc={element.Problem}
            abstract={element.Abstract}
            tag={element.Tags}
            name={element.Author}
          />
        ))}
      </div>
      <button onClick={props.handleclick} id='featurebutton'>
        {props.buttontext}
      </button>
    </div>
  );
}
