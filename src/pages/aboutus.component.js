import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// icons imports
import webd_icon from "../assets/icons/webd_icon.png";
import creative_icon from "../assets/icons/creative_icon.png";
import content_icon from "../assets/icons/editorial_icon.png";
import pr_icon from "../assets/icons/pr_icon.png";
import "./css/aboutus.component.css";
function About() {
  return (
    <div className="about-us">
      <span className="txt-green txt-bld">About Us</span>
      <span className="txt-sz-2x txt-bld">
        Who <span className="coloured-text">we</span> are?
      </span>
      <div className="main-background">
        <button className="btn-rnd">?</button>
      </div>
      <div className="about-us-desc">
        <div className="title">
          <span className="coloured-text">E-CELL </span> SRMIST
        </div>
        <span className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ultricies
          at id molestie consequat facilisis tortor. Ut sem nisl pharetra, in
          duis ultrices arcu nisi. Nulla aliquet massa vivamus enim maecenas
          morbi tincidunt integer neque. Diam augue neque, risus nulla molestie
          pellentesque viverra imperdiet volutpat.
        </span>
        <span>
          <Link className="coloured-text" to="/team">
            Learn More
          </Link>
        </span>
      </div>

      <div className="domains">
        <span className="txt-green txt-bld">Domains</span>
        <span className="txt-sz-2x txt-bld">
          We are <span className="coloured-text">open</span> for?
        </span>

        {/* Domains Wrappers */}

        <div className="domains-wrapper">
          <div className="domain-items">
            <img src={webd_icon} style={{ justifySelf: "flex-start" }} />
            <span className="txt-bld-md">
              <span className="coloured-text">Web</span> Development
            </span>
            <span className="domain-desc op-05">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              at sed nunc at varius tempus cursus dignissim. Non elit lacus,
              mauris scelerisque neque odio sagittis. Commodo, integer ut
              habitasse iaculis. Est non amet mauris tristique scelerisque.
            </span>
          </div>

          <div className="domain-items">
            <img src={creative_icon} style={{ justifySelf: "flex-start" }} />
            <span className="txt-bld-md">
              <span className="coloured-text">Creative</span> Society
            </span>
            <span className="domain-desc op-05">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              at sed nunc at varius tempus cursus dignissim. Non elit lacus,
              mauris scelerisque neque odio sagittis. Commodo, integer ut
              habitasse iaculis. Est non amet mauris tristique scelerisque.
            </span>
          </div>
        </div>

        {/* Domains Wrappers */}

        <div className="domains-wrapper">
          <div className="domain-items">
            <img src={content_icon} style={{ justifySelf: "flex-start" }} />
            <span className="txt-bld-md">
              <span className="coloured-text">Content</span> & Editorial
            </span>
            <span className="domain-desc op-05">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              at sed nunc at varius tempus cursus dignissim. Non elit lacus,
              mauris scelerisque neque odio sagittis. Commodo, integer ut
              habitasse iaculis. Est non amet mauris tristique scelerisque.
            </span>
          </div>

          <div className="domain-items">
            <img src={pr_icon} style={{ justifySelf: "flex-start" }} />
            <span className="txt-bld-md">
              <span className="coloured-text">Public relations</span> &
              Marketing
            </span>
            <span className="domain-desc op-05">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              at sed nunc at varius tempus cursus dignissim. Non elit lacus,
              mauris scelerisque neque odio sagittis. Commodo, integer ut
              habitasse iaculis. Est non amet mauris tristique scelerisque.
            </span>
          </div>
        </div>
        <span className="join-us-link">
          <Link className="txt-green" to="/teams">
            Join our team
          </Link>
        </span>
      </div>
    </div>
  );
}
export default About;
