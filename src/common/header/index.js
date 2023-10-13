import React from "react";
import "./header.scss";
import Sirilogo from "../main-logo";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="main-header">
          <div className="right-header">
            <nav>
              <AiOutlineMenu className="icon-menu" />
              <a href="dixit.com">Destinations</a>
              <a href="dixit.com">Our Philosophy</a>
              <a href="dixit.com">The Journal</a>
              <a href="dixit.com">Our App</a>
            </nav>
          </div>
          <div className="logo-infoDubai">
            <Sirilogo className="logo" />
            <h5>ONE ZA'ABEEL.DUBAI</h5>
          </div>
          <div className="left-header">
            <nav>
              <a href="dixit.com">Membership</a>
              <a href="dixit.com">Stay Connected</a>
              <a href="dixit.com">Contect Us</a>
              <button>BOOK</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
