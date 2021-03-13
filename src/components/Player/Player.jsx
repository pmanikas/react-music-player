import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentSong } from "./../../store/actions/songs.actions";
import { play, pause } from "./../../store/actions/player.actions";
import {
  skipForward,
  skipBackwards,
  timeUpdate,
} from "./../../services/player.service";
import { covertMsToTime } from "./../../utils/timeFormat.utils";

import styles from "./Player.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-regular-svg-icons";

const Player = ({ audioRef }) => {
  const songs = useSelector((state) => state.songsState.songs);
  const currentSong = useSelector((state) => state.songsState.currentSong);
  const isPlaying = useSelector((state) => state.playerState.isPlaying);

  const dispatch = useDispatch();
  const setCurrentSong = (song) => dispatch(updateCurrentSong(song));
  const setAsPlaying = () => dispatch(play());
  const setAsPaused = () => dispatch(pause());

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e) => {
    timeUpdate(e, setSongInfo, songInfo, skipTrackHandler);
  };

  const playSongHandler = () => {
    if (!currentSong || !currentSong.audio) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const timeDragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    if (direction === "skip-back") {
      skipBackwards(songs, currentSong, setCurrentSong, isPlaying, audioRef);
    } else if (direction === "skip-forward") {
      skipForward(songs, currentSong, setCurrentSong, isPlaying, audioRef);
    }
  };

  const formatTime = (time) => covertMsToTime(time);

  const trackAnim = {
    transform: `translateX(${
      (songInfo.currentTime / songInfo.duration) * 100
    }%)`,
  };

  return (
    <div className={styles.player}>
      <div className={styles.timeControl}>
        <p className={styles.timestamp}>
          {songInfo.currentTime ? formatTime(songInfo.currentTime) : "0:00"}
        </p>
        <div className={styles.track}>
          <div
            style={{ backgroundImage: `url(${currentSong.cover})` }}
            className={styles.sliderBackground}
          ></div>
          <input
            onChange={timeDragHandler}
            className={styles.timeInput}
            type="range"
            min={0}
            value={songInfo.currentTime || 0}
            max={songInfo.duration || 0}
          />
          <div style={trackAnim} className={styles.animateTrack}></div>
        </div>
        <p className={styles.timestamp}>
          {songInfo.duration ? formatTime(songInfo.duration) : "0:00"}
        </p>
      </div>
      <div className={styles.playerControl}>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className={`${styles.icon} ${styles.skipBack}`}
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className={`${styles.icon} ${styles.play}`}
          size="3x"
          icon={isPlaying ? faPauseCircle : faPlayCircle}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className={`${styles.icon} ${styles.skipForward}`}
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onPause={() => setAsPaused()}
        onPlay={() => setAsPlaying()}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
