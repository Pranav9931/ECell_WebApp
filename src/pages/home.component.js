import React, { useEffect } from "react";
import "./css/home.component.css";
import GraphicLeft from "../assets/Stars_Left_Design_Dark.svg";
import GraphicRight from "../assets/Stars_Right_Design_Dark.svg";
import HomeContent from "../assets/home_content_txt_dark.svg";
import PeopleImg from "../assets/people_img.png";
import NotifPanel from "./notif.component";
import About from "./aboutus.component";
import Mentors from "./mentors.component";
import Feedback from "./feedback.component";
import ConnectWithUs from "./connectwithus.component";
import Footer from "./footer.component";
const Home = () => {
  useEffect(() => {
    document.title =
      "E-Cell SRMIST | The Official Entrepreneurship Cell SRMIST";
  }, []);
  return (
    <div className="home-container">
      <div className="home-background">
        <img src={GraphicLeft} alt="graphic_left" />
        <img src={GraphicRight} alt="graphic_right" />
      </div>
      <div className="home-content-head">
        <img src={HomeContent} alt="home_content_head" />
        <span className="home-content">
          E-Cell SRMIST is a student-run entrepreneurial organization, official
          under C.Tech. department under the SCO.
        </span>
        <div className="home-btn">
          <button className="btn hm-btn">Become a Member</button>
          <img src={PeopleImg} id="people_img" alt="people_img" />
        </div>
      </div>

      {/* About Us Section */}

      <div className="about-us-section">
        <NotifPanel />
        <About />
      </div>

      {/* Mentor's View */}

      <div className="mentors-opinion">
        <Mentors />
      </div>

      {/* Feedback Form and Address */}
      <div className="feedback">
        <Feedback />
      </div>

      {/* Connect with us */}

      <div className="connect">
        <ConnectWithUs />
      </div>

      {/* footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
