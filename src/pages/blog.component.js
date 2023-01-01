import React from "react";
import "./css/blog.component.css";
import BlogCard from "./blogcard.component";
import Footer from "./footer.component";

const Blog = () => {
  const blogData = [
    {
      title: "Henry Ford's Business STRATEGY",
      imgSrc: "https://miro.medium.com/max/1400/1*OwCVhqexzBV5UZH8PN-BYg.webp",
      author: "Kshitiz Kamal",
      category: "Entrepreneurship",
      date: "01/01/2023",
      owner: "E-Cell, SRMIST",
      desc: "Henry Ford is one of the greatest businessmen of the 20th centu...",
      blogUrl:
        "https://medium.com/@srmist.ecell0/henry-fords-business-strategy-20afbeacd33c",
    },
    {
      title: "Entrepreneurship In India",
      imgSrc: "https://miro.medium.com/max/1400/1*B3TqKqwv1XWllgDdqyitxw.webp",
      author: "Parvathy V Nair",
      category: "Entrepreneurship",
      date: "01/01/2023",
      owner: "E-Cell, SRMIST",
      desc: "At its most basic level, entrepreneurship refers to an indi...",
      blogUrl:
        "https://medium.com/@srmist.ecell0/entrepreneurship-in-india-a59911e76a7f",
    },
    {
      title: "Henry Ford's Business STRATEGY",
      imgSrc: "https://miro.medium.com/max/1400/1*OwCVhqexzBV5UZH8PN-BYg.webp",
      author: "Anudatt Sunith",
      category: "Entrepreneurship",
      date: "01/01/2023",
      owner: "E-Cell, SRMIST",
      desc: "Henry Ford is one of the greatest businessmen of the 20th centu...",
      blogUrl:
        "https://medium.com/@srmist.ecell0/entrepreneurship-in-india-a59911e76a7f",
    },
  ];
  return (
    <div className="blog-page">
      <div className="blog-page-comtainer">Blogs</div>
      <BlogCard value={blogData} />

      <div className="blog-btn">
        <button className="blogBtn">View More</button>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
