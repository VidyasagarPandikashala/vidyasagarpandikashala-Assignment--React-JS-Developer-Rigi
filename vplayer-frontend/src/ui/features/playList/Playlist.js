import { useSelector } from "react-redux";
import PlayListCard from "../../shared-components/playlistCard/PlayListCard";

import CreatePlayList from "../../shared-components/dialog-popup/CreatePlayList";
import { SELECT_TABLE } from "../../../utilityFunction/appSlice";
import { Link } from "react-router-dom";
import styles from "./Playlist.module.css";

function Playlist() {
  const selectPlayList = useSelector(SELECT_TABLE.selectPlayList);
  console.log(selectPlayList);
  return (
    <div className={styles.noPlaylistBackground}>
      {selectPlayList.length === 0 ? (
        <div className={styles.noPlaylist}> No playlist available</div>
      ) : (
        selectPlayList.map((eachPlaylist) => {
          return (
            <div key={eachPlaylist.playListId}>
              <Link
                to={`/playlist/${eachPlaylist.playListId}`}
                className={styles.linkStyle}
              >
                <PlayListCard playlistName={eachPlaylist.playlistName} />
              </Link>
            </div>
          );
        })
      )}
      <CreatePlayList className={styles.createPlaylist} />
    </div>
  );
}

export default Playlist;
