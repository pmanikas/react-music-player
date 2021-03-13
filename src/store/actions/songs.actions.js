import { getAll } from "./../../services/songs.service";

export const getSongs = () => async (dispatch) => {
  const allSongs = await getAll();
  dispatch({
    type: "GET_SONGS",
    payload: allSongs,
  });
};

export const updateCurrentSong = (song) => async (dispatch) => {
  await dispatch({
    type: "UPDATE_CURRENT_SONG",
    payload: song,
  });
};
