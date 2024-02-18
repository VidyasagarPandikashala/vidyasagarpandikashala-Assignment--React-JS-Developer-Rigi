import React, { useState, useEffect } from "react";

import VideoPlayer from "../../shared-components/videoPlayer/VideoPlayer.js";

import styles from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { SELECT_TABLE } from "../../../redux/applicationslice/appSlice.js";
import VideoListItem from "../../shared-components/videoListItem/VideoListItem.js";

function HomePage() {
  const [videoSrc, setVideoSrc] = useState("");

  const selectVideos = useSelector(SELECT_TABLE.selectVideos);
  console.log(selectVideos);

  function handleOnclick(src) {
    setVideoSrc(src);
    console.log("hi");
  }

  return (
    <div>
      <div className={styles.videoListContainer}>
        <VideoPlayer src={videoSrc} />

        <div className={styles.outerWrapperVideoListContainer}>
          <div className={styles.listHeading}>
            <h1>All Videos</h1>
          </div>
          {selectVideos.map((eachVideo) => {
            return (
              <VideoListItem
                key={eachVideo.id}
                eachVideo={eachVideo}
                onClickHandler={handleOnclick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
