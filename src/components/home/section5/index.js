import React from "react";
import "./section5.scss";
import food from "../../../assets/images/Siri-food.webp";
import food1 from "../../../assets/images/SIRO-food2.webp";
import food2 from "../../../assets/images/SIRO One Za_abeel Dubai-Nutritio-Image Card-2.webp";
import yoga from "../../../assets/images/siro-brandcampaign-haya_yoga_room--4882-last.webp";

export default function FoodSori() {
  return (
    <div className="foodSori">
      <div className="container">
        <div className="main-food">
          <div className="info-food">
            <h4>Dining tailored to you</h4>
            <div className="info-discr">
              <p>
                Visit SIRO One Za'abeel's Refuel Bar for healthy, on-the-go
                snacks and smoothies. For a personalised dietary plan, consult
                our in-house nutritionist, set your goals, and order in-room
                delivery through the SIRO app – our modular dining concept
                enables you to build meals that fit your macros.
              </p>
            </div>
          </div>
          <div className="food-img-grid">
            <img src={food} alt="" />
            <div className="img-div">
              <img src={food1} alt="" />
              <img src={food2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="yoga-img">
        <img src={yoga} alt="" />
      </div>
    </div>
  );
}
