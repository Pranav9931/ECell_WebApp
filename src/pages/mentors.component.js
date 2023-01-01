import React from "react";
import { Link } from "react-router-dom";
import "./css/mentors.component.css";
import Mentor_Image from "../assets/MrMukeshKrishnan.jpg";
import Mayank_Rai_Image from "../assets/MAYANK_RAI_IMAGE.png";

import GraphicLeft from "../assets/Stars_Left_Design_Dark.svg";
import GraphicRight from "../assets/Stars_Right_Design_Dark.svg";

function Mentors() {
  return (
    <div className="mentors-container flex flex-dir-clm">
      <span className="txt-green txt-bld font-sz-08">Mentor's View</span>
      <span className="txt-bld">
        <span className="coloured-text">Hear</span> from our{" "}
        <span className="coloured-text">Founders</span>
      </span>
      <span className="tag-line">
        <kbd>"The way we go ahead, the way we lead."</kbd>
      </span>
      <div className="mentors-content">
        <div className="mentors-column">
          <img
            src={Mentor_Image}
            alt="Mukesh Krishnan, Mentor | E-Cell SRMIST"
          />
          <span className="mentors-feed">
            Working as a Professor in the School of Computing, SRM Institute of
            Science and Technology hold more two decades of experience in
            entrepreneurship mentoring. Spent a semester long time in UC
            Berkeley and gone through the learning process of entrepreneurship
            teaching pedagogy and Implementing in SRM Institute of Science and
            Technology. Holds the close connections with the silicon valley
            entrepreneurs and Investors.
          </span>
          <span className="mentors-name">Dr. Mukesh Krishnan M B</span>
          <span className="mentors-designation">
            - Faculty Incharge,{" "}
            <span className="coloured-text">E-Cell SRMIST</span>
          </span>
        </div>

        <div className="mentors-column">
          <img src={Mayank_Rai_Image} alt="Mayank Rai | Fonder E-Cell SRMIST" />
          <span className="mentors-feed">
            Who doesn't want to be a part of a community where your craziest
            ideas are considered seriously and discussed upon? I've wanted to be
            a part of it since my freshman year in college. Ironically for me,
            E-Cell, SRMIST has become just the place for all that mind blowing
            innovation. We welcome innovative minds who are ready to bring about
            a transformation across the globe. We also work rigorously in order
            to develop the entrepreneurial mindset among other Semites via
            various mind blowing events.
          </span>
          <span className="mentors-name">Mayank Rai</span>
          <span className="mentors-designation">
            - Founder, <span className="coloured-text">E-Cell SRMIST</span>
          </span>
        </div>
      </div>
      <span className="link mr-tp-20">
        <Link className="txt-green" to="/teams">
          Meet our team
        </Link>
      </span>

      <div className="mentors-section-graphic">
        <img src={GraphicLeft} alt="graphic_left" />
        <img src={GraphicRight} alt="graphic_right" />
      </div>
    </div>
  );
}

export default Mentors;
