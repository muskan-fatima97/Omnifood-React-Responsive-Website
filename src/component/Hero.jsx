import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>GOODBYE JUNK FOOD.<br />HELLO SUPER HEALTHY MEALS.</h1>
        <div className="hero-buttons">
          <button className="btn-primary">I'm hungry</button>
          <button className="btn-secondary">Show me more</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
