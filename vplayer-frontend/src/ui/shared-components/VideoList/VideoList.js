import VideoPlayerThumbnail from "../VideoPlayerThumbnail/VideoPlayerThumbnail";
import AddToPlaylist from "../dialog-popup/AddToPlaylist";
import styles from "./VideoList.module.css";
function VideoList({ eachVideo, onClickHandler }) {
  return (
    <div>
      <div className={styles.eachVideoContainer}>
        <VideoPlayerThumbnail
          videoSrc={eachVideo.videoSrc}
          onClickHandler={onClickHandler}
          thumbnailStyle={"thumbnailcontainer"}
        />
        <div>
          <div className={styles.movieNameContainer}>
            <p className={styles.movieName}>{eachVideo.name}</p>
          </div>
          <div className={styles.addToPlaylistContainer}>
            <AddToPlaylist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoList;
