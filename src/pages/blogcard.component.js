import React, { useEffect } from "react";
import "./css/blogcard.component.css";
import File from "../assets/type.svg";
import EcellLogo from "../assets/ecell-logo-new.jpg";

const BlogCard = (value) => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    document.title = "Blogs | E-Cell, SRMIST";
  }, []);

  return (
    <div className="blogcard-container">
      <div className="blog-container-header">
        <span>Blogs</span>
        <span>
          Sort by:
          <select className="select-options">
            <option val="name">Name</option>
            <option val="category">Category</option>
          </select>
        </span>
      </div>
      <div className="blog-card-content">
        {value.value.map((item, i) => (
          <div
            key={i}
            className="card"
            onClick={() => handleClick(item.blogUrl)}
          >
            <img src={item.imgSrc} alt={item.title} />
            <div style={{ padding: "0 5px" }}>
              <div className="blog-category">
                <img src={File} alt="file_icon" />
                {item.category}
              </div>
              <div style={{ fontWeight: "700" }}>{item.title}</div>
              <div
                style={{
                  color: "#ffffff60",
                  padding: "10px 0",
                  fontWeight: "400",
                }}
              >
                {item.desc}
              </div>

              <div className="blog-author">
                <span>
                  <span style={{ color: "#ffffff" }}>By: </span>
                  {item.author}
                </span>
                <span>
                  <span style={{ color: "#ffffff" }}>&#128337; </span>

                  {item.date}
                </span>
              </div>
              <div className="blog-card-footer">
                <div className="organisation-icon">
                  <img src={EcellLogo} alt="ecell_logo" />
                </div>
                <span>{item.owner}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
