import React, { useState } from "react";
import "./Sidebar.css";
import {
  Person1,
  Person2,
  Person3,
  Person4,
  Person5,
  Person6,
} from "../../Assets/ImageIndex";

const sideBarData = {
  mainTabs: [
    {
      head: "Home",
      icon: "home",
    },
    {
      head: "Trending",
      icon: "local_fire_department",
    },
    {
      head: "Subscriptions",
      icon: "subscriptions",
    },
  ],

  externalTabs: [
    {
      head: "Library",
      icon: "folder",
    },
    {
      head: "History",
      icon: "history",
    },
    {
      head: "Watch Later",
      icon: "alarm",
    },
    {
      head: "Favourites",
      icon: "star",
    },
    {
      head: "Liked Videos",
      icon: "favorite",
    },
    {
      head: "Music",
      icon: "music_note",
    },
    {
      head: "Games",
      icon: "stadia_controller",
    },
  ],

  dependecyTabs: [
    {
      head: "Films",
      icon: "theaters",
    },
    {
      head: "Live",
      icon: "sensors",
    },
    {
      head: "Sports",
      icon: "sports_soccer",
    },
  ],

  channels: [
    {
      name: "Gussie Singleton",
      logo: Person1,
    },
    {
      name: "Nora Francis",
      logo: Person2,
    },
    {
      name: "Belle Briggs",
      logo: Person3,
    },
    {
      name: "Eunice Cortez",
      logo: Person4,
    },
    {
      name: "Emma Hanson",
      logo: Person5,
    },
    {
      name: "Leah Berry",
      logo: Person6,
    },
  ],
};

const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <div className="sidebar-container" id="sidebar-container">
      <div className="sidebar-tabs">
        <div className="main-tab-container">
          {sideBarData.mainTabs.map((tab, i) => (
            <div key={i} className={"sidebar-tab"}>
              <span className="sidebar-tab material-symbols-rounded">
                {tab.icon}
              </span>
              {tab.head}
            </div>
          ))}
        </div>
        <div className="external-tab-container">
          {sideBarData.externalTabs.map((tab, i) => (
            <div key={i} className={"sidebar-tab"}>
              <span className="sidebar-tab material-symbols-rounded">
                {tab.icon}
              </span>
              {tab.head}
            </div>
          ))}
          <div className="sidebar-tab">
            <span
              className="sidebar-tab material-symbols-rounded"
              onClick={handleClick}
            >
              expand_more
            </span>
            <p onClick={handleClick}>Show more</p>
          </div>
        </div>
        {isShown && (
          <div className="external-tab-container">
            {sideBarData.dependecyTabs.map((tab, i) => (
              <div key={i} className={"sidebar-tab"}>
                <span className="sidebar-tab material-symbols-rounded">
                  {tab.icon}
                </span>
                {tab.head}
              </div>
            ))}
            <div className="sidebar-tab">
              <span
                className="sidebar-tab material-symbols-rounded"
                onClick={handleClick}
              >
                expand_less
              </span>
              <p onClick={handleClick}>Show less</p>
            </div>
          </div>
        )}
        <div className="subscription-tab-container">
          <h2 className="subscription-head">Subscriptions</h2>
          <div className="channel-tab">
            {sideBarData.channels.map((tab) => {
              return (
                <div className="sidebar-tab" key={tab.logo}>
                  <img src={tab.logo} alt={tab.logo} title={tab.name} />
                  <p>{tab.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="settings-tab-container">
          <div className="settings-tab-container material-symbols-rounded">
            settings
          </div>
          Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
