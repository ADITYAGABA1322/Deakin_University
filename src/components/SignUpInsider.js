import React, { useState } from 'react';
import './SignUpInsider.css';

export default function SignUp(props) {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const serverUrl = 'http://localhost:8080/signUp'; 
      const response = await fetch(`${serverUrl}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Subscribed successfully');
        alert('Subscribed successfully');

      } else {
        props.showAlert('Subscribe Failed','danger');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setEmail('');
  };

  return (
    <div className="emailbar">
      <h1 htmlFor="email" id="mailLabel">
        SIGN UP FOR OUR DAILY INSIDER
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
