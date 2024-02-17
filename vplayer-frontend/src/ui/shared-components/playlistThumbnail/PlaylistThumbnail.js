import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import styles from "./PlaylistThumbnail.module.css";
function PlaylistThumbnail({ videoSrc, onClickHandler, thumbnailStyle }) {
  return (
    <>
      <div onClick={() => onClickHandler(videoSrc)}>
        <PlaylistAddCheckCircleIcon className={styles.playlistIcon} />
      </div>
    </>
  );
}

export default PlaylistThumbnail;
