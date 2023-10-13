import React from "react";
import "./section2.scss";
import perform from "../../../assets/images/sec2.webp";

export default function Performsec() {
  return (
    <div className="performance-section">
      <div className="container">
        <div className="new-home-perform-sec">
          <div className="img-info">
            <img src={perform} alt="" />
            <div className="info-home-perform">
              <h4>The new home of performance</h4>
              <div className="perform-info">
                <p>
                  Guests and SIRO Club members can experience our
                  state-of-the-art Fitness Lab, complete with dedicated spaces
                  for yoga and meditation. Book private training sessions,
                  studio classes, and our signature SIRO programs, including
                  Functional Fitness by AC Milan, Boxing by Ramla Ali, and Core
                  by Adam Peaty. Image
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
