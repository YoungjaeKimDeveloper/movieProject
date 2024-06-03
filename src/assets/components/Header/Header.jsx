import React from "react";
import "../Header/Header.css";
import Fire from "../../image/fire.png";
import Star from "../../image/star.png";
import Face from "../../image/partying-face.png";
//현재 Header에는 손댈곳 없음
// There is no issue
const Header = () => {
  return (
    <div className="header-main">
      <h1 className="header-main-title">MovieSearch</h1>
      <div className="header-main-links">
        <a href="#" className="header-main-link">
          Popular
          <img src={Fire} alt="burning_Fire" className="header-main-icon" />
        </a>
        <a href="#" className="header-main-link">
          Top Rated
          <img src={Star} alt="shining_Star" className="header-main-icon" />
        </a>
        <a href="#" className="header-main-link">
          Upcoming
          <img src={Face} alt="Part_Face" className="header-main-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
