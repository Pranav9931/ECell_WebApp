import React, { useState } from "react";
import "./css/notif.component.css";
import { Link } from "react-router-dom";
import InstaLiveImg from "../assets/insta_live_01_01_2023.jpg";
import EgnitePoster from "../assets/Egnite_Poster.jpg";
function NotifPanel() {
  const [data, setData] = useState([
    {
      id: 1,
      type: "Instagram Live",
      title: "Insta Live ft. Ankush Barjata",
      desc: "Going Live at 5PM on 1st Jan. 2023",
      imgSrc: InstaLiveImg,
      venue: "Instagram",
      postUrl: "https://www.instagram.com/p/Cm1Tnk1vYnw/",
    },
    {
      id: 2,
      type: "Event",
      title: "E-GNITE'22",
      desc: "Register youself for E-GNITE'22.",
      imgSrc: EgnitePoster,
      venue: "Main Hall - T.P. Ganesan Auditorium",
      postUrl: "https://www.instagram.com/p/Ck0kNPmpX3g/",
    },
    {
      id: 3,
      type: "Event",
      title: "Ideathon 1.0",
      desc: "Register youself for the biggest ever even.",
      imgSrc:
        "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=2000",
      venue: "Tech Park",
      postUrl: "",
    },
  ]);

  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="notif-panel">
      Notifications & <span className="coloured-text">Upcoming</span> Events
      <div className="notif-panel-items-wrapper">
        {data.map((i) => {
          return (
            <div
              className="notif-panel-item"
              key={i.id}
              onClick={() => handleClick(i.postUrl)}
            >
              <div className="items-wrapper">
                <img src={i.imgSrc} alt={i.title} />
                <div className="item-content-wrapper">
                  <span>{i.title}</span>
                  <span className="desc">{i.desc}</span>
                  <span className="venue">
                    Venue: <span className="txt-green">{i.venue}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex mr-lt-10 jst-spc-btw alg-center">
          <div className="">
            <img src={data[0].imgSrc} alt={data[0].title} />
            <img
              className="mr-lt-10"
              src={data[1].imgSrc}
              alt={data[1].title}
            />
          </div>
          <div>
            <Link className="coloured-text" to="/event">
              Load More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotifPanel;
