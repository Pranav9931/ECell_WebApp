import React from "react";
import "./css/home.component.css";
import GraphicLeft from "../assets/Stars_Left_Design_Dark.svg";
import GraphicRight from "../assets/Stars_Right_Design_Dark.svg";
import HomeContent from "../assets/home_content_txt_dark.svg";
import PeopleImg from "../assets/people_img.png";
import NotifPanel from "./notif.component";
import About from "./aboutus.component";
import Mentors from "./mentors.component";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-background">
        <img src={GraphicLeft} alt="graphic_left" />
        <img src={GraphicRight} alt="graphic_right" />
      </div>
      <div className="home-content-head">
        <img src={HomeContent} alt="home_content_head" />
        <span className="home-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          hendrerit integer donec velit.
        </span>
        <div className="home-btn">
          <button className="btn hm-btn">Become a Member</button>
          <img src={PeopleImg} alt="people_img" />
        </div>
      </div>
      <div className="about-us-section">
        <NotifPanel />
        <About />
      </div>

      {/* Mentor's View */}

      <div className="mentors-opinion">
        <Mentors />
      </div>
    </div>
  );
};

export default Home;
