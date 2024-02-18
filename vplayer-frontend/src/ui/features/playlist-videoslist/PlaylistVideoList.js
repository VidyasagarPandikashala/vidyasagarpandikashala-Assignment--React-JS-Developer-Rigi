import { useSelector } from "react-redux";

import VideoPlayer from "../../shared-components/videoPlayer/VideoPlayer";
import { SELECT_TABLE } from "../../../redux/applicationslice/appSlice";
import styles from "./PlaylistVideoList.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import VideoListItem from "../../shared-components/videoListItem/VideoListItem";

function PlaylistVideoList() {
  const [videoSrc, setVideoSrc] = useState("");
  const params = useParams();

  const playlistInfoWithVideosForPlaylistId = useSelector(
    SELECT_TABLE.getSelectorForVideosUnderPlaylist([params.playlistId])
  );

  function handleOnclick(src) {
    setVideoSrc(src);
  }

  return (
    <div>
      <div className={styles.homePageHeader}></div>
      <div className={styles.videoListContainer}>
        <VideoPlayer src={videoSrc} />
        <div className={styles.outerWrapperVideoListContainer}>
          <div>
            <h1>
              Playlist : {playlistInfoWithVideosForPlaylistId[0].playlistName}
            </h1>
          </div>
          {playlistInfoWithVideosForPlaylistId[0]?.videos.map((eachVideo) => {
            return (
              <VideoListItem
                key={eachVideo.id}
                eachVideo={eachVideo}
                onClickHandler={handleOnclick}
              />
            );
          }) || ""}
        </div>
      </div>
    </div>
  );
}

export default PlaylistVideoList;
