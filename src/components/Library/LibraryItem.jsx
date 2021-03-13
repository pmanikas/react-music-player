import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentSong } from "./../../store/actions/songs.actions";
import styles from "./LibraryItem.module.scss";

const LibraryItem = ({
  song,
  audioRef,
  isPlaying,
}) => {
  const currentSong = useSelector(state => state.songsState.currentSong);

  const dispatch = useDispatch();

  const songSelectHandler = async () => {
    await dispatch(updateCurrentSong(song));
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`${styles.container} ${
        song.id === currentSong.id ? styles.active : ""
      }`}
    >
      <img className={styles.cover} src={song.cover} alt={song.name} />
      <div className={styles.meta}>
        <h3 className={styles.title}>{song.name}</h3>
        <h4 className={styles.artist}>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibraryItem;
