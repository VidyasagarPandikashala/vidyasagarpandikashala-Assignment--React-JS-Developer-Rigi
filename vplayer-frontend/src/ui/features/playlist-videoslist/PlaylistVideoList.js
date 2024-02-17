import { useSelector } from "react-redux";
import Logo from "../../shared-components/logo/Logo";
import NavBar from "../../shared-components/navbar/NavBar";
import VideoList from "../../shared-components/videoList/VideoList";
import VideoPlayer from "../../shared-components/videoPlayer/VideoPlayer";
import { SELECT_TABLE } from "../../../utilityFunction/appSlice";
import styles from "./PlaylistVideoList.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

function PlaylistVideoList() {
  const [videoSrc, setVideoSrc] = useState("");
  const params = useParams();
  // const selectPlayListVideos = useSelector(SELECT_TABLE.selectPlayListVideos);
  // const allVideos = useSelector(SELECT_TABLE.selectVideos);

  // const currentPlaylistVideos = selectPlayListVideos[params.playListId];
  // const currentPlaylistVideos = selectPlayListVideos[params.playListId];

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
              <VideoList
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
