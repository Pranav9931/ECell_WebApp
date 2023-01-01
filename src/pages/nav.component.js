import React from "react";
import "./css/master.css";
import "./css/nav.component.css";

import Logo from "../assets/ECellWhite.png";
import LightMode from "../assets/icons/Sun.png";
import { Link } from "react-router-dom";

function NavigationPanel() {
  return (
    <div className="navigation-bar">
      <div className="nav-bar-links">
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="ecellsrmist_logo" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/team">Team</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>

      <div className="nav-buttons">
        <button className="btn btn-rnd mode-toggle">
          <img src={LightMode} alt="light_mode_icon" />
        </button>
        <button
          className="btn btn-rnd"
          style={{ width: "80px", margin: "0 20px" }}
        >
          Login
        </button>
        <button className="btn nav-btn">Join us</button>
      </div>
    </div>
  );
}

export default NavigationPanel;
