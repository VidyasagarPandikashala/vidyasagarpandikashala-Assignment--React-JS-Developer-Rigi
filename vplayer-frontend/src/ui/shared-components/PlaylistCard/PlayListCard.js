import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PlayListCard.module.css";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import PlaylistThumbnail from "../playlistThumbnail/PlaylistThumbnail";
function PlayListCard({ playlistName }) {
  return (
    <div className={styles.playlistStyle}>
      <PlaylistThumbnail />
      <div>
        <p>{playlistName}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faWindowMinimize} />
      </div>
    </div>
  );
}

export default PlayListCard;
