import React from "react";
import whatsappIcon from "../assets/icons/whatsapp_icon.png";
import facebookIcon from "../assets/icons/facebook_icon.png";
import linkedinIcon from "../assets/icons/linkedin_icon.png";
import { Link } from "react-router-dom";
import "./css/connectwithus.component.css";
function ConnectWithUs() {
  return (
    <div className="connect-with-us">
      <span className="txt-bld" style={{ marginBottom: "40px" }}>
        Connect <span className="coloured-text">with</span> us
      </span>
      <div className="connect-wrapper">
        <Link to="/whatsapp">
          <div className="contact-online-items">
            <span className="social-media-img-container">
              <img src={whatsappIcon} alt="whatsapp_icon" />
            </span>
            <div className="contact-wrapper">
              <span className="contact-online-title">WhatsApp</span>
              <span className="contact-online-desc">
                Let's connect via whatsapp
              </span>
            </div>
          </div>
        </Link>

        <Link to="/whatsapp">
          <div className="contact-online-items">
            <span className="social-media-img-container">
              <img src={facebookIcon} alt="facebook_icon" />
            </span>
            <div className="contact-wrapper">
              <span className="contact-online-title">Facebook Messenger</span>
              <span className="contact-online-desc">
                Let's connect via Facebook Messenger
              </span>
            </div>
          </div>
        </Link>

        <Link to="/whatsapp">
          <div className="contact-online-items">
            <span className="social-media-img-container">
              <img src={linkedinIcon} alt="linkedin_icon" />
            </span>
            <div className="contact-wrapper">
              <span className="contact-online-title">Linked In</span>
              <span className="contact-online-desc">
                Let's connect via Linked In
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ConnectWithUs;
