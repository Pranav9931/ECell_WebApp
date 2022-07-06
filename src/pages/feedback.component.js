import React from "react";
import "./css/feedback.component.css";
import mailIcon from "../assets/icons/mail_icon.png";
import phoneIcon from "../assets/icons/phone_icon.png";
import locationIcon from "../assets/icons/location_icon.png";
import timerIcon from "../assets/icons/timer_icon.png";

function Feedback() {
  return (
    <div className="feedback-container">
      <div className="feedback-form">
        <div className="feedback-header txt-bld">
          <span className="txt-green font-sz-08">Feedback or Idea</span>
          <div>
            Do <span className="coloured-text">you</span> have an{" "}
            <span className="coloured-text">idea</span> to pitch?
          </div>
        </div>

        <div className="form">
          <form
            action="#"
            onSubmit={(e) => e.preventDefault()}
            autoComplete="off"
          >
            <div className="field">
              <label className="label" htmlFor="name">
                Name<span className="coloured-text">*</span>
              </label>
              <input
                id="name"
                type="text"
                className="input-field"
                placeholder="Your name here."
                required
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="email">
                Email<span className="coloured-text">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="input-field"
                placeholder="Your email here."
                required
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="idea">
                Your Idea<span className="coloured-text">*</span>
              </label>
              <textarea
                id="idea"
                type="text"
                className="input-field"
                placeholder="Give wings to your imagination."
                style={{ minHeight: "70px" }}
                required
              />
            </div>

            <button type="submit" id="submit" className="btn hm-btn">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="address">
        <span className="txt-bld address-title">
          Contact <span className="coloured-text">Information</span>
        </span>
        <div className="address-info">
          <img src={mailIcon} />
          <span className="address-desc">ecellsrm@srmist.edu.in</span>
        </div>

        <div className="address-info">
          <img src={phoneIcon} />
          <span className="address-desc">+91 - 9999999999</span>
        </div>

        <div className="address-info">
          <img src={locationIcon} style={{ alignSelf: "flex-start" }} />
          <span className="address-desc">
            Tech Park, SRM Institute of Science & Technology, SRM Nagar,
            Kattankulathur,
            <br />
            Tamil Nadu (603202), <br />
            India
          </span>
        </div>

        <span className="txt-bld address-title" style={{ marginTop: "10px" }}>
          Working <span className="coloured-text">Hours</span>
        </span>

        <div className="address-info">
          <img src={timerIcon} style={{ alignSelf: "flex-start" }} />
          <span className="address-desc">
            Monday - Friday
            <br />
            09:00 AM to 05:00 PM
          </span>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
