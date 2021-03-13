import React from "react";
import { useSelector } from "react-redux";
import styles from "./Library.module.scss";
import LibraryItem from "./LibraryItem";

const Library = ({ audioRef }) => {
  const songs = useSelector((state) => state.songsState.songs);
  const currentSong = useSelector((state) => state.songsState.currentSong);
  const isLibraryOpen = useSelector(
    (state) => state.appearanceState.isLibraryOpen
  );
  const isPlaying = useSelector((state) => state.playerState.isPlaying);

  return (
    <div className={`${styles.library} ${isLibraryOpen ? styles.active : ""}`}>
      <h2 className={styles.title}>Library</h2>
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
