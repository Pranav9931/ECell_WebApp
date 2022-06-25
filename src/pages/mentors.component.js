import React from "react";
import "./css/mentors.component.css";
import Mentor_Image from "../assets/Mentor_Image.jpeg";
import Mayank_Rai_Image from "../assets/MAYANK_RAI_IMAGE.png";
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
          <img src={Mentor_Image} />
          <span className="mentors-feed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mi
            egestas vitae quisque. Volutpat lobortis arcu, sem varius sapien
            lacus, sed et dolor. Sed velit, posuere orci phasellus. Est, tellus
            morbi sem commodo suspendisse odio consequat. Odio ipsum mauris
            feugiat enim a. Sem mauris ac, adipiscing amet mi sed.
          </span>
          <span className="mentors-name">Dr. Mukesh Krishnan M B</span>
          <span className="mentors-designation">
            - Faculty Incharge,{" "}
            <span className="coloured-text">E-Cell SRMIST</span>
          </span>
        </div>

        <div className="mentors-column">
          <img src={Mayank_Rai_Image} />
          <span className="mentors-feed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mi
            egestas vitae quisque. Volutpat lobortis arcu, sem varius sapien
            lacus, sed et dolor. Sed velit, posuere orci phasellus. Est, tellus
            morbi sem commodo suspendisse odio consequat. Odio ipsum mauris
            feugiat enim a. Sem mauris ac, adipiscing amet mi sed.
          </span>
          <span className="mentors-name">Mayank Rai</span>
          <span className="mentors-designation">
            - Founder, <span className="coloured-text">E-Cell SRMIST</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Mentors;
