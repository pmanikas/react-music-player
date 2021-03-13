import React from "react";
import { useSelector } from "react-redux";
import styles from "./HeroSong.module.scss";

const HeroSong = () => {
  const currentSong = useSelector((state) => state.songsState.currentSong);

  return (
    <div className={styles.songContainer}>
      <img
        className={styles.cover}
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <h2 className={styles.title}>{currentSong.name}</h2>
      <h3 className={styles.artist}>{currentSong.artist}</h3>
    </div>
  );
};

export default HeroSong;
