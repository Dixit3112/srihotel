import React from "react";
import "./section1.scss";
import Flat from "../../../assets/images/sec1.webp";

export default function Dubaisec() {
  return (
    <div className="dubaiSec">
      <div className="container">
        <div className="img-flat-dubai">
          <div className="info-booking">
            <p>
              Unlock your potential at SIRO One Za’abeel’s cutting-edge Fitness
              and Recovery Labs, set against the backdrop of Dubai's iconic
              skyline. Strengthen body and mind with custom fitness, recovery
              and nutrition plans curated by Team SIRO and our in-house
              specialists.
            </p>
            <div className="center-btn">
              <button>BOOKING OPEN FOR 2024</button>
            </div>
          </div>
          <div className="img-flat-engineer">
            <div className="img-center">
              <img src={Flat} alt="" />
            </div>
            <div className="info-engineer">
              <h4>Rooms Engineered for rest</h4>
              <p>
                SIRO rooms deliver the ultimate reset. Ensure restorative sleep
                with the pillow of your choice, a cooling mattress, soundproofed
                surroundings, and more integrated features. Explore Swedish
                ladders and recovery cabinets stocked with workout essentials,
                or completely elevate your daily routine by booking a fitness or
                recovery suite.
              </p>
              <div className="center-btn">
                <button>DISCOVER ROOMS & SUITES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
