import React from "react";
import "./main-logo.scss";
import sirilogo from "../../assets/logos/SIROlogo.svg";
export default function Sirilogo() {
  return (
    <div className="sirilogo">
      <div className="container">
        <div className="logo">
          <img src={sirilogo} alt="" />
        </div>
      </div>
    </div>
  );
}
