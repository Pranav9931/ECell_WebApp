import React from "react";
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
          E-Cell, SRMIST is a student-run entrepreneurial body whose aim is to
          promote entrepreneurship among students. It was currently placed 4th
          in the list of top 10 performing entrepreneurial organizations
          nationwide under the NEC (National Entrepreneurship Challenge)
          conducted by E-Cell, IIT Bombay.
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
            <img
              src={webd_icon}
              style={{ justifySelf: "flex-start" }}
              alt="web_dev_icon"
            />
            <span className="txt-bld-md">
              <span className="coloured-text">Web</span> Development
            </span>
            <span className="domain-desc op-05">
              Ever wanted to create awesome website such as the one you're
              current on? E-Cell's Web-Dev domain provides you the opportunity
              to create & design full stack, scalable websites and web pages.
            </span>
          </div>

          <div className="domain-items">
            <img
              src={creative_icon}
              style={{ justifySelf: "flex-start" }}
              alt="creatives_icon"
            />
            <span className="txt-bld-md">
              <span className="coloured-text">Creative</span> Society
            </span>
            <span className="domain-desc op-05">
              What good are pictures without them? Tap into your creative side
              by using graphics, animations and designs to create eye catching
              and alluring digital media.
            </span>
          </div>
        </div>

        {/* Domains Wrappers */}

        <div className="domains-wrapper">
          <div className="domain-items">
            <img
              src={content_icon}
              style={{ justifySelf: "flex-start" }}
              alt="content_editorial_icon"
            />
            <span className="txt-bld-md">
              <span className="coloured-text">Content</span> & Editorial
            </span>
            <span className="domain-desc op-05">
              A single word can change a lot of things. Showcase your literary
              prowess at our content and editorial team where your words can be
              heard in bold (or italics…).
            </span>
          </div>

          <div className="domain-items">
            <img
              src={pr_icon}
              style={{ justifySelf: "flex-start" }}
              alt="public_relations_and_marketing_icon"
            />
            <span className="txt-bld-md">
              <span className="coloured-text">Public relations</span> &
              Marketing
            </span>
            <span className="domain-desc op-05">
              A story can only be as good as the person that narrates it. If
              you're a “people's person” then this is just the place for you. Be
              part of our PR and marketing team to strategise, plan and
              publicise our events.
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
