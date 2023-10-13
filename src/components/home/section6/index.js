import React from "react";
import "./section6.scss";
import card1 from "../../../assets/images/Fitness Carsoule Card 2.webp";
import card2 from "../../../assets/images/Mindfulness-Jagged Image-Big.webp";
import collect from "../../../assets/images/siro-one-zaabeel-collective.webp";

export default function Mindspace() {
  return (
    <div className="mindspace">
      <div className="container">
        <div className="main-mindspace">
          <div className="info-mind">
            <h4>A dedicated mindfulness space</h4>
            <div className="info-div">
              <p>
                The Zen Room at SIRO One Za’abeel is a sanctuary for inner
                balance. Book guided mindfulness sessions that invite you to
                take a break from the cosmopolitan rush, whether you’re looking
                for a moment of calm or a mental health boost
              </p>
            </div>
          </div>
          <div className="img-grid">
            <img src={card1} alt="" />
            <img src={card2} alt="" />
          </div>
          <div className="collective">
            <h4>The Collective</h4>
            <div className="info-div">
              <p>
                As the social heart of SIRO One Za’abeel, The Collective is a
                space where connections are built, knowledge is shared, and
                inspiration takes root. Here, you’ll discover events that
                educate and empower our local SIRO community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-collect">
        <img src={collect} alt="" />
      </div>
    </div>
  );
}
