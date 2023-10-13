import React from "react";
import "./hero.scss";
import monte from "../../../assets/videos/video2.mp4";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="main-hero">
          <video src={monte} muted autoplay={"true"} loop></video>
          <div className="main-text">
            <div className="text-on-video">
              <h1>Boka Place, Montenegro</h1>
              <p>
                The ultimate fitness and recovery hotel on the Balkan coast.
                Opening in 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
