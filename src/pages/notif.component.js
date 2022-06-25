import React, { useState } from "react";
import "./css/notif.component.css";
import { Link } from "react-router-dom";
function NotifPanel() {
  let count = 2;
  const [data, setData] = useState([
    {
      id: 1,
      type: "Event",
      title: "Ideathon 1.0",
      desc: "Register youself for the biggest ever even.",
      imgSrc:
        "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=2000",
      venue: "Tech Park",
    },
    {
      id: 2,
      type: "Event",
      title: "Ideathon 1.0",
      desc: "Register youself for the biggest ever even.",
      imgSrc:
        "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=2000",
      venue: "Tech Park",
    },
    {
      id: 3,
      type: "Event",
      title: "Ideathon 1.0",
      desc: "Register youself for the biggest ever even.",
      imgSrc:
        "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=2000",
      venue: "Tech Park",
    },
  ]);
  return (
    <div className="notif-panel">
      Notifications & <span className="coloured-text">Upcoming</span> Events
      <div className="notif-panel-items-wrapper">
        {data.map((i) => {
          return (
            <div className="notif-panel-item" key={i.id}>
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
            <img src={data[0].imgSrc} />
            <img className="mr-lt-10" src={data[0].imgSrc} />
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
