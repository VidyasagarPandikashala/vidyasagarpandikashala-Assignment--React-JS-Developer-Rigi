import VideoPlayerThumbnail from "../VideoPlayerThumbnail/VideoPlayerThumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PlayListCard.module.css";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
function PlayListCard() {
  return (
    <div className={styles.playlistStyle}>
      <VideoPlayerThumbnail thumbnailStyle={"thumbnailcontainer"} />
      <div>
        <p>PlaylistName</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faWindowMinimize} />
      </div>
    </div>
  );
}

export default PlayListCard;
