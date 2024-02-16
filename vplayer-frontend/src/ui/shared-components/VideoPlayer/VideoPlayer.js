import VideoPlayerThumbnail from "../VideoPlayerThumbnail/VideoPlayerThumbnail";
import styles from "./VideoPlayer.module.css";

function VideoPlayer({ src }) {
  return (
    <>
      {src === "" ? (
        <VideoPlayerThumbnail thumbnailStyle={"thumbContainerVideoPlayer"} />
      ) : (
        <video
          className={styles.videoPlayer}
          controls
          width="100%"
          src={src}
        ></video>
      )}
    </>
  );
}

export default VideoPlayer;
