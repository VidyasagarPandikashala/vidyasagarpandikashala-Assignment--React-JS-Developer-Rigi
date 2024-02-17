import React, { useState, useEffect } from "react";

import VideoPlayer from "../../shared-components/videoPlayer/VideoPlayer.js";
import Logo from "../../shared-components/logo/Logo.js";
import NavBar from "../../shared-components/navbar/NavBar.js";
import VideoList from "../../shared-components/videoList/VideoList.js";
import styles from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  SELECT_TABLE,
  DATABASE_ACTIONS,
} from "../../../utilityFunction/appSlice.js";

function HomePage(props) {
  const size = 0;

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
              <VideoList
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
