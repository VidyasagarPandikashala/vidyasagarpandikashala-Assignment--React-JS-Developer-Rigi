import React, { useState, useEffect } from "react";
import getVideoList from "../../../APIs/getVideoList";
import VideoPlayer from "../../shared-components/VideoPlayer/VideoPlayer.js";
import Logo from "../../shared-components/Logo/Logo.js";
import NavBar from "../../shared-components/NavBar/NavBar.js";
import VideoList from "../../shared-components/VideoList/VideoList.js";
import styles from "./HomePage.module.css";

function HomePage(props) {
  const size = 0;
  const [videoList, setVideoList] = useState([]);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    if (size !== 0) {
      setVideoList(props.data);
    } else {
      setVideoList(getVideoList);
    }
  }, [size, props.data]);

  function handleOnclick(src) {
    setVideoSrc(src);
    console.log("hi");
  }

  return (
    <div>
      <div className={styles.homePageHeader}>
        <Logo />
        <NavBar />{" "}
      </div>
      <div className={styles.videoListContainer}>
        <VideoPlayer src={videoSrc} />
        <div className={styles.outerWrapperVideoListContainer}>
          {videoList.map((eachVideo) => {
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
