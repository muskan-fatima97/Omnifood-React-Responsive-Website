import React from "react";
import "../App.css";

const reviews = [
  {
    name: "Alberto Duncan",
    text: "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!",
    image: "./customer-1.jpg"
  },
  {
    name: "Joana Silva",
    text: "Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!",
    image: "./customer-2.jpg"
  },
  {
    name: "Milton Chapman",
    text: "I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!",
    image: "./customer-3.jpg"
  }
];

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <h2 className="review-title">OUR CUSTOMERS CAN'T LIVE WITHOUT US</h2>
      <div className="line"></div>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text"><span style={{fontSize:"60px"}}>"</span> <br/>{review.text}</p>
            <div className="review-user">
              <img src={review.image} alt={review.name} />
              <span>{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
