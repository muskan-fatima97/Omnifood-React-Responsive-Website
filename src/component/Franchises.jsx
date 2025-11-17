import React from "react";
import "../App.css";

const cities = [
  {
    name: "Lisbon",
    image: "./lisbon-3.jpg",
    eaters: "1,600+ happy eaters",
    chefs: "60+ top chefs",
    twitter: "@omnifood_lx"
  },
  {
    name: "San Francisco",
    image: "./london.jpg",
    eaters: "3,700+ happy eaters",
    chefs: "160+ top chefs",
    twitter: "@omnifood_sf"
  },
  {
    name: "Berlin",
    image: "./berlin.jpg",
    eaters: "2,300+ happy eaters",
    chefs: "110+ top chefs",
    twitter: "@omnifood_berlin"
  },
  {
    name: "London",
    image: "./san-francisco.jpg",
    eaters: "1,200+ happy eaters",
    chefs: "50+ top chefs",
    twitter: "@omnifood_london"
  }
];

const FranchiSection = () => {
  return (
    <section className="franchi-section">
      <h2 className="section-title how-title">WE'RE CURRENTLY IN THESE CITIES</h2>
      <div className="line"></div>
      <div className="cities-container">
        {cities.map((city, index) => (
          <div className="city-card" key={index}>
            <img src={city.image} alt={city.name} className="city-img" />

            <h3 className="city-name">{city.name}</h3>
            <ul className="city-details">
              <li><img src="./person-icon.png" alt="" /> {city.eaters}</li>
              <li><img src="./star.png" alt="" /> {city.chefs}</li>
              <li> <img src="./twitter.png" alt="" /> {city.twitter}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FranchiSection;
