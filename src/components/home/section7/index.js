import React from "react";
import "./siroclub.scss";
import Lastsec from "./lastimg sec";

export default function Clubseclast() {
  return (
    <div className="clublast">
      <div className="container">
        <div className="main-club">
          <div className="grid-two-card">
            <div className="card1">
              <h4>Become a SIRO Club Member</h4>
              <p>
                Join the SIRO club and unlock a range of exclusive fitness,
                wellness and retail benefits.
              </p>
              <div className="butn">
                <button>PRE REGISTER NOW</button>
              </div>
            </div>
            <div className="card1">
              <h4>The SIRO App</h4>
              <p>
                Plan your stay and explore fitness activities and recovery
                treatments with a tap.
              </p>
              <div className="butn">
                <button>DOWNLOAD THE APP</button>
              </div>
            </div>
          </div>
          <Lastsec />
        </div>
      </div>
    </div>
  );
}
