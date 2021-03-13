import { getAll } from "./../../services/songs.service";

const getSongs = () => async (dispatch) => {
  const allSongs = await getAll();
  dispatch({
    type: "GET_SONGS",
    payload: allSongs,
  });
};

const updateCurrentSong = (song) => async (dispatch) => {
  await dispatch({
    type: "UPDATE_CURRENT_SONG",
    data: song,
  });
};

export { getSongs, updateCurrentSong };
