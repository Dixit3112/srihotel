import React from "react";
import "./section3.scss";
import boxer from "../../../assets/images/boxing.webp";
import pull from "../../../assets/images/cycling.webp";
import desertrun from "../../../assets/images/desert.webp";
import desermulti from "../../../assets/images/group desert.webp";

export default function FitnessSec3() {
  return (
    <div className="fitness">
      <div className="container">
        <div className="grid-img">
          <img src={boxer} alt="" />
          <img src={pull} alt="" />
        </div>
        <div className="info-exercise">
          <h4>Destination Fitness</h4>
          <div className="discr-exersizePlace">
            <p>
              Discover Dubai through immersive experiences in diverse
              landscapes. Choose from a spectrum of guided activities, from
              extreme pursuits like skydiving and Deep Dive Dubai to classic
              desert adventures, such as mountain trekking and quad biking in
              the dunes.
            </p>
          </div>
        </div>
        <div className="img-desert">
          <img src={desertrun} alt="" />
        </div>
        <div className="img-walking">
          <img src={desermulti} alt="" />
        </div>
      </div>
    </div>
  );
}
