import React from "react";
import "../App.css";

const plans = [
  {
    title: "PREMIUM",
    price: "399$",
    desc: "That's only 13.30$ per meal",
    features: [
      "1 meal every day",
      "Order 24/7",
      "Access to newest creations",
      "Free delivery"
    ]
  },
  {
    title: "PRO",
    price: "149$",
    desc: "That's only 14.90$ per meal",
    features: [
      "1 meal 10 days/month",
      "Order 24/7",
      "Access to newest creations",
      "Free delivery"]
  },
  {
    title: "STARTER",
    price: "19$",
    desc: "That's only 19$ per meal",
    features: [
      "1 meal",
      "Order from 8 am to 12 pm",
      "Free delivery"
    ]
  }
];

const MealPlansSection = () => {
  return (
    <section className="meal-section">
      <h2 className="how-title">START EATING HEALTHY TODAY</h2>
      <div className="line"></div>
      <div className="meal-cards">
        {plans.map((plan, index) => (
          <div className="meal-card" key={index}>
            <div className="meal-top">
              <h3>{plan.title}</h3>
              <h1>{plan.price}<span className="meal-unit"> / meal</span></h1>
              <p className="meal-sub">{plan.desc}</p>
            </div>
            <div className="meal-divider"></div>
            <div className="meal-bottom">
              <ul>
                {plan.features.map((features, index) => (
                  <li key={index}>{features}</li>
                ))}
              </ul>
              <div className="meal-divider"></div>
              <div className="meal-footer">
                <button className={`meal-btn ${index === 0 ? "solid-btn" : "outline-btn"}`}>
                  Sign up now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

};

export default MealPlansSection;
