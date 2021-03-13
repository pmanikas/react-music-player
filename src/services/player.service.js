const skipForward = async (
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  audioRef
) => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  if (isPlaying) audioRef.current.play();
};

const skipBackwards = async (
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  audioRef
) => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  (await currentIndex) === 0
    ? setCurrentSong(songs[songs.length - 1])
    : setCurrentSong(songs[currentIndex - 1]);
  if (isPlaying) audioRef.current.play();
};

const timeUpdate = (e, setSongInfo, songInfo, skipTrackHandler) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({ ...songInfo, currentTime: current, duration });
  if (duration - current < 1) {
    skipTrackHandler("skip-forward");
  }
};

export { skipForward, skipBackwards, timeUpdate };
