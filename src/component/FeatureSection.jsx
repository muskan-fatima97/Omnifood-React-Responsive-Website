import React from "react";
import "../App.css";

const FeatureSection = () => {
  return (
    <section className="features-section">
      <div className="text-center">
        <h2 className="how-title">GET FOOD FAST — NOT FAST FOOD.</h2>
        <div className="line"></div>
        <p className="sub-text">
          Hello, we're Omnifood, your new premium food delivery service. We know you're
          always busy. No time for cooking. So let us take care of that, we're really
          good at it, we promise!
        </p>
      </div>
      <div class="features-grid">
        <div class="feature-box">
          <img src="./infinity.png" alt="Infinity" />
          <h3>UP TO 365 DAYS/YEAR</h3>
          <p>
            Never cook again! We really mean that. Our subscription plans include up to
            365 days/year coverage. You can also choose to order more flexibly if that's
            your style.
          </p>
        </div>
        <div class="feature-box">
          <img src="./clock.png" alt="Clock" />
          <h3>READY IN 20 MINUTES</h3>
          <p>
            You're only twenty minutes away from delicious and super healthy meals
            delivered right to your home. We work with the best chefs to ensure you're
            100% happy.
          </p>
        </div>
        <div class="feature-box">
          <img src="./leaf.png" alt="Organic" />
          <h3>100% ORGANIC</h3>
          <p>
            All our vegetables are fresh, organic and local. Animals are raised without
            hormones or antibiotics. Good for your health and the environment — and
            it tastes better!
          </p>
        </div>
        <div class="feature-box">
          <img src="./bag.png" alt="Bag" />
          <h3>ORDER ANYTHING</h3>
          <p>
            We don't limit your creativity, which means you can order whatever you feel
            like. Choose from our menu with over 100 delicious meals. It's up to you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
