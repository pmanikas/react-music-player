import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchSongs } from "./../../store/actions/songs.actions";
import styles from "./Library.module.scss";
import LibraryItem from "./LibraryItem";
import Search from "./../Search/Search";

const Library = ({ audioRef }) => {
  const songs = useSelector((state) => state.songsState.songs);
  const currentSong = useSelector((state) => state.songsState.currentSong);
  const isLibraryOpen = useSelector(
    (state) => state.appearanceState.isLibraryOpen
  );
  const isPlaying = useSelector((state) => state.playerState.isPlaying);

  const dispatch = useDispatch();

  const commitSearch = (e) => dispatch(searchSongs(e.target.value));

  return (
    <div className={`${styles.library} ${isLibraryOpen ? styles.active : ""}`}>
      <h2 className={styles.title}>Library</h2>
      <Search commitSearch={commitSearch} />
      <div className={styles.songs}>
        {songs.map((song) => (
          <LibraryItem
            song={song}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
