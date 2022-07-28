import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import React, { useState, useEffect } from "react";

const Trending = ({ darkMode, isDarkMode,isOpen,handleOpenMenu }) => {
  const [trending, setTrending] = useState([]);

  const trends = trending.map((element, index) => (
    <div
      className="trends-container"
      style={
        isDarkMode
          ? {
              backgroundColor: "var(--bg-dark-color)",
              color: "var(--bg-light-color)",
            }
          : { backgroundColor: "var(--bg-light-color" }
      }
    >
      <div className="trends-inner-container">
        <div className="trends-header">
          <div className="trends-profile-container">
            <img src={process.env.PUBLIC_URL + element.image} alt="" />
            <div className="trends-header-text">
              <h2>{element.topic}</h2>
              <p>{element.name}</p>
            </div>
          </div>
          <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
        </div>
        <div className="trends-body">
          <h2>"{element.post}"</h2>
        </div>
        <div className="trends-icons">
          <div className="trends-icons-left">
            <i className="bx bxs-heart bx-md"></i>
            <h3>{element.likes} Likes</h3>
          </div>
          <div className="trends-icons-right">
            <h3>{element.commentNumber} Comments</h3>
            <h3>{element.shares} Shares</h3>
          </div>
        </div>
        <div className="trends-footer">
          <div className="comment-bar">
            <form>
              <input type="text" />
              <input type="submit" value="comment" id="submit-button" />
            </form>
          </div>
          <div className="comments">
            <h4>{element.comments.commenter}</h4>
            <p>{element.comments.comment}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    fetch("http://localhost:3000/trending")
      .then((response) => response.json())
      .then((data) => setTrending(data));
  }, []);

  return (
    <div className="trending-container">
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} handleOpenMenu={handleOpenMenu} />
      <div className="trending-section">
        <Menu isDarkMode={isDarkMode} isOpen={isOpen}  />
        {trends}
      </div>
    </div>
  );
};

export default Trending;
