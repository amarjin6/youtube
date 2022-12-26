import React from "react";
import "./Navbar.css";
import { BlackLogo, Avatar } from "../../Assets/ImageIndex";
import SvgIndex from "../../Assets/SvgIndex";

const handleSidebar = () => {
  const sidebarContainer = document.getElementById("sidebar-container");
  sidebarContainer.classList.toggle("close");
};

const Navbar = () => {
  return (
    <header>
      <div className="header-container">
        <div>
          <div className="hamburger">
            <div onClick={handleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <img src={BlackLogo} alt="YouTube Logo" title="YouTube" />
        </div>
        <div className="search-bar">
          <input
            className="search-query-input"
            type="text"
            name="search-query-input"
            placeholder="Search"
          />
          <button
            className="search-query-submit"
            type="submit"
            name="search-query-submit"
          >
            <SvgIndex />
          </button>
        </div>
        <div className="profile-container">
          <span className="material-symbols-rounded">video_call</span>
          <span className="material-symbols-rounded">apps</span>
          <span className="material-symbols-rounded">
            notifications
            <div className="notifications-count">3</div>
          </span>
          <img src={Avatar} alt="Avatar Logo" title="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
