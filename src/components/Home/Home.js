import React from "react";
import "./Home.css";
import { Person1 } from "../../Assets/ImageIndex";
import Video from "./Video";
import {
  Video1,
  Video2,
  Video3,
  Video4,
  Video5,
  Video6,
  Video7,
  Video8,
  Video9,
  Video10,
  Video11,
  Video12,
  Video13,
  Video14,
  Video15,
  Video16,
  Video17,
  Video18,
  Video19,
  Channel1,
} from "../../Assets/ImageIndex";

const HomeData = {
  channel_videos: [
    {
      image: Video1,
      title: "A Brief History Of Creation",
      duration: "4:15",
      views: 80000,
      uploadTime: "3 days ago",
      channel: "Dollie Blair",
      type: "normal",
    },
    {
      image: Video2,
      title: "Selecting The Right Hotel",
      duration: "8:00",
      views: 123000,
      uploadTime: "1 months ago",
      channel: "Dollie Blair",
      type: "normal",
    },
    {
      image: Video3,
      title: "Asteroids",
      duration: "5:32",
      views: 43000,
      uploadTime: "12 days ago",
      channel: "Dollie Blair",
      type: "normal",
    },
    {
      image: Video4,
      title: "Telescopes 101",
      duration: "6:40",
      views: 11000,
      uploadTime: "6 months ago",
      channel: "Dollie Blair",
      type: "normal",
    },
    {
      image: Video5,
      title: "Medical Care Is Just",
      duration: "1:45",
      views: 18000,
      uploadTime: "2 days ago",
      channel: "Dollie Blair",
      type: "normal",
    },
    {
      image: Video6,
      title: "Moon Gazing",
      duration: "2:12",
      views: 67000,
      uploadTime: "4 months ago",
      channel: "Dollie Blair",
      type: "normal",
    },
    {
      image: Video16,
      title: "Pinaple Astonishing Facts",
      duration: "9:08",
      views: 66000,
      uploadTime: "8 months ago",
      channel: "Dollie Blair",
      type: "normal",
    },
    {
      image: Video17,
      title: "Healthy Eating",
      duration: "8:19",
      views: 45000,
      uploadTime: "4 days ago",
      channel: "Dollie Blair",
      type: "normal",
    },
    {
      image: Video18,
      title: "Traffic Lights Art",
      duration: "6:13",
      views: 27000,
      uploadTime: "1 year ago",
      channel: "Dollie Blair",
      type: "normal",
    },
    {
      image: Video19,
      title: "Hoel Railings History",
      duration: "7:23",
      views: 51000,
      uploadTime: "6 months ago",
      channel: "Dollie Blair",
      type: "normal",
    },
  ],
  recommended_videos: [
    {
      image: Video7,
      title: "Dude You Are Getting A Telescope",
      duration: "3:40",
      views: 34000,
      uploadTime: "5 months ago",
      channel: "Gussie French",
      type: "large",
    },
    {
      image: Video8,
      title: "Moon Gazing",
      duration: "2:12",
      views: 54000,
      uploadTime: "11 months ago",
      channel: "Edward Osborne",
      type: "large",
    },
    {
      image: Video9,
      title: "Moon Gazing",
      duration: "2:12",
      views: 125000,
      uploadTime: "4 months ago",
      channel: "Dollie Blair",
      type: "large",
    },
  ],
  foodNdrink_videos: [
    {
      image: Video10,
      title: "Astronomy Or Astrology",
      duration: "7:36",
      views: 240000,
      uploadTime: "4 months ago",
      channel: "Food & Drink",
      type: "normal",
    },
    {
      image: Video11,
      title: "Advertising Outdoors",
      duration: "2:19",
      views: 13000,
      uploadTime: "15 days ago",
      channel: "Food & Drink",
      type: "normal",
    },
    {
      image: Video12,
      title: "Radio Astronomy",
      duration: "9:05",
      views: 1000,
      uploadTime: "11 months ago",
      channel: "Food & Drink",
      type: "normal",
    },
    {
      image: Video13,
      title: "A Good Autoresponder",
      duration: "3:40",
      views: 45000,
      uploadTime: "2 months ago",
      channel: "Food & Drink",
      type: "normal",
    },
    {
      image: Video14,
      title: "Baby Monitor Technology",
      duration: "1:56",
      views: 86000,
      uploadTime: "7 days ago",
      channel: "Food & Drink",
      type: "normal",
    },
    {
      image: Video15,
      title: "Asteroids",
      duration: "4:15",
      views: 123000,
      uploadTime: "4 months ago",
      channel: "Dollie Blair",
      type: "normal",
    },
  ],
};

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-container">
        <img src={Person1} alt="Person1 logo" title="Dollie Blair" />
        <p>Dollie Blair</p>
      </div>
      <div className="video-container">
        {HomeData.channel_videos.map((video) => {
          return <Video video={video} key={video.image} />;
        })}
      </div>
      <h2>Recommended</h2>
      <div className="video-container">
        {HomeData.recommended_videos.map((video) => {
          return <Video video={video} key={video.image} />;
        })}
      </div>
      <div className="channel-container">
        <img
          src={Channel1}
          alt="Food & Drink"
          title="Food & Drink"
          className="channel-img"
        />
        <h2 className="channel-name">Food & Drink</h2>
        <p className="channel-info">Recommended channel for you</p>
      </div>
      <div className="video-container">
        {HomeData.foodNdrink_videos.map((video) => {
          return <Video video={video} key={video.image} />;
        })}
      </div>
    </div>
  );
};

export default Home;
