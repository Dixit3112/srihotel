import React from "react";
import "./section4.scss";
import spa from "../../../assets/images/spa.webp";
import massag1 from "../../../assets/images/massage1.webp";
import acp from "../../../assets/images/accpracing.webp";
import massag2 from "../../../assets/images/massage2.webp";
import massag3 from "../../../assets/images/massage3.webp";

export default function Recoverylab() {
  return (
    <div className="recovery-lab">
      <div className="container">
        <div className="main-recoveryLab">
          <div className="info-recovery">
            <h4>Recovery Lab</h4>
            <div className="info">
              <p>
                Consult with our specialists, map out a recovery treatment plan
                and benefit from the synergy of science and holistic wellness at
                our Recovery Lab. From invigorating cold plunges to assisted
                stretching and cutting-edge therapies like dry needling, SIRO
                One Za'abeel offers a variety of treatments to help you recharge
                and rejuvenate.
              </p>
            </div>
          </div>
          <div className="spa">
            <img src={spa} alt="" />
          </div>
          <div className="grid-3img-gap">
            <img src={massag1} alt="" />
            <img src={acp} alt="" />
            <img src={massag2} alt="" />
          </div>
        </div>
      </div>
      <div className="massag-main">
        <img src={massag3} alt="" />
      </div>
    </div>
  );
}
