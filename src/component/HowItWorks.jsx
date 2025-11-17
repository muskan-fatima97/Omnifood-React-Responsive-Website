import React from "react";
import "../App.css";

const HowItWorks = () => {
  return (
    <section className="how-section">
      <h2 className="how-title">How it works - Simple as 1, 2, 3</h2>
      <div className="line"></div>
      <div className="how-wrapper">
        <img
          src="./app-iPhone.png"
          alt="Phone"
          className="how-phone"
        />
        <div className="how-steps">
          <div className="step">
            <span className="step-number">1</span>
            <p>Choose the subscription plan that best fits your needs and sign up today.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>Order your delicious meal using our mobile app or website.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>Enjoy your meal after less than 20 minutes. See you next time!</p>
          </div>
          <div className="app-buttons">
            <img src="./download-app-android.png" alt="App Store" />
            <img src="./download-app.svg" alt="Google Play" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
