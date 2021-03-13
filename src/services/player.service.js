export const skipForward = async (
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

export const skipBackwards = async (
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
