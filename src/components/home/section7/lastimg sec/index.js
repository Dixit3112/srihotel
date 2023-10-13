import React from "react";
import "./imglast.scss";
import tourBeach from "../../../../assets/images/Boka Place Montenegro Menu Overlay Banner.jpg";

export default function Lastsec() {
  return (
    <div className="last-sec">
      <div className="container">
        <div className="img-discover">
          <div className="main-img-txt">
            {/* <div className="abs-blur-box"></div> */}
            <div className="img-relative">
              <img src={tourBeach} alt="" />
              <div className="text-img-absl">
                <h4>SIRO Boka Place, Montenegro</h4>
                <div className="info-txt-img">
                  <p>
                    Experience a haven of nature, adventure and wellbeing at
                    this coastal SIRO destination. Opening in 2024.
                  </p>
                </div>
                <div className="btn-discover">
                  <button>DISCOVER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
