import React from "react";
import "./footer.scss";
import { AiOutlinePlus } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-main-padding">
          <div className="footer-flex-main">
            <div className="footer-flex-item">
              <div className="footer-border-top">
                <div className="topic-head">
                  <h4>Connect</h4>
                  <AiOutlinePlus className="icon-plus" />
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Instagram</a>
                </div>
              </div>
            </div>
            <div className="footer-flex-item">
              <div className="footer-border-top">
                <div className="topic-head">
                  <h4>News</h4>
                  <AiOutlinePlus className="icon-plus" />
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Media</a>
                </div>
              </div>
            </div>
            <div className="footer-flex-item">
              <div className="footer-border-top">
                <div className="topic-head">
                  <h4>Terms & Conditions</h4>
                  <AiOutlinePlus className="icon-plus" />
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Website Terms</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Global Privacy Policy</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Payment and Cancellation Policy</a>
                </div>
              </div>
            </div>
            <div className="footer-flex-item">
              <div className="footer-border-top">
                <div className="topic-head">
                  <h4>Kerzner</h4>
                  <AiOutlinePlus className="icon-plus" />
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Atlantis</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">One&Only</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Rare Finds</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Careers</a>
                </div>
              </div>
            </div>
            <div className="footer-flex-item">
              <div className="footer-border-top">
                <h4>Stay Connected</h4>
                <div className="center-btn">
                  <button className="">SIGN-UP NOW</button>
                </div>
              </div>
            </div>
          </div>
          <div className="terms">
            <p>2023 © Kerzner International Limited. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
