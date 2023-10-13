import React from "react";
import "../../scss/global.scss";
// import Practice from "../../components/practice";
import Header from "../../common/header";
import Herobanner from "../../components/home/herobanner";
import Performsec from "../../components/home/section2";
import FitnessSec3 from "../../components/home/section3";
import Recoverylab from "../../components/home/section4";
import FoodSori from "../../components/home/section5";
import Mindspace from "../../components/home/section6";
import Clubseclast from "../../components/home/section7";
import Footer from "../../common/footer";

export default function Main() {
  return (
    <div>
      {/* <Practice /> */}
      <Header />
      <Herobanner />
      <Performsec />
      <FitnessSec3 />
      <Recoverylab />
      <FoodSori />
      <Mindspace />
      <Clubseclast />
      <Footer />
    </div>
  );
}
