import React from "react";
import ECellWhite from "../assets/ECellWhite.png";
import { Link } from "react-router-dom";
import "./css/footer.component.css";
import fbIcon from "../assets/icons/fb_icon.png";
import instaIcon from "../assets/icons/insta_icon.png";
import twitterIcon from "../assets/icons/twitter_icon.png";
import linkedinIcon from "../assets/icons/li_icon.png";

function Footer() {
  return (
    <div className="footer-container">
      <Link to="/">
        <img src={ECellWhite} alt="ecell_logo" />
      </Link>
      <div className="font-sz-06 op-05 mr-tp-20 mr-btm-20">
        All rights reserved to E-Cell SRMIST
      </div>
      <div className="social-media-links">
        <a href="https://www.facebook.com/profile.php?id=100072747483834">
          <span className="social-media-btn">
            <img
              src={fbIcon}
              style={{ maxWidth: "10px" }}
              alt="facebook_icon"
            />
          </span>
        </a>

        <a href="https://www.instagram.com/ecell_srmist/">
          <span className="social-media-btn">
            <img src={instaIcon} alt="insta_icon" />
          </span>
        </a>

        <Link to="/social">
          <span className="social-media-btn">
            <img
              src={twitterIcon}
              style={{ width: "22px" }}
              alt="twitter_icon"
            />
          </span>
        </Link>

        <a href="https://www.linkedin.com/company/e-cell-srmist/">
          <span className="social-media-btn">
            <img src={linkedinIcon} alt="linkedin_icon" />
          </span>
        </a>
      </div>
      <div className="policies-wrapper">
        <div className="policies">
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/cookiespolicy">Cookies Policy</Link>
        </div>
        <span className="font-sz-08" id="credits-text">
          Created by <span className="coloured-text">Designers</span> and{" "}
          <span className="coloured-text">Developers</span> at E-Cell SRMIST
        </span>
      </div>
    </div>
  );
}

export default Footer;
