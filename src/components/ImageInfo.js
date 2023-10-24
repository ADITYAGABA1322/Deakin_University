import React from 'react';
import styles from './ImageInfo.css';

export default function ImageInfo(props) {
  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate a random background color for each card
  const cardStyle = {
    backgroundColor: getRandomColor(),
  };

  return (
    <div className="img-card" style={cardStyle}>
      <h3 id='imgtitle'>{props.title}</h3>
      <p id='description' className='clamp'>{props.desc}</p>
      <p id='description' className='clamp'>{props.abstract}</p>
      <p id='name'>⭐5 {"  " + props.name}</p>
    </div>
  );
}
