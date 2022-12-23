import React from "react";
import "./Video.css";

const Video = ({ video }) => {
  const countViews = (number) => {
    if (number.toString().length === 4) {
      return number.toString().slice(0, 1) + "K";
    }
    if (number.toString().length === 5) {
      return number.toString().slice(0, 2) + "K";
    }
    if (number.toString().length === 6) {
      return number.toString().slice(0, 3) + "K";
    }
    if (number.toString().length === 7) {
      return number.toString().slice(0, 1) + "M";
    }
    if (number.toString().length === 8) {
      return number.toString().slice(0, 2) + "M";
    }
  };

  return (
    <>
      <div className="videoBox">
        <div className="thumbnailInfo">
          <img src={video.image} alt="Thumbnail" className="videoThumbnail" />
          <p>{video.duration}</p>
        </div>
        <div className="videoInfo">
          <div>
            <h2>{video.title}</h2>
            <p>
              {countViews(video.views)} views • {video.uploadTime}{" "}
              {video.channel}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;