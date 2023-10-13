import React from "react";
import "./herobanner.scss";
import video1 from "../../../assets/videos/video1.mp4";
import Dubaisec from "../section1";

export default function Herobanner() {
  return (
    <div className="herobanner">
      <div className="container">
        <div className="blur-video"></div>
        <div className="header-backward-video">
          <video src={video1} autoplay={true} muted></video>
          <div className="siro-dubai">
            <h1>PauseIcon SIRO One Za’abeel, Dubai</h1>
          </div>
          <div className="text-dubai">
            <p>Dubai’s first fitness + recovery hotel. Opening soon.</p>
          </div>
          <div className="button">
            <button className="btn">BOOKING OPEN FOR 2024</button>
          </div>
        </div>
      </div>
      <Dubaisec />
    </div>
  );
}
