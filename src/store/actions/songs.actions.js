import { getAll } from "./../../services/songs.service";

const getSongs = () => async (dispatch) => {
  const allSongs = await getAll();
  dispatch({
    type: "GET_SONGS",
    payload: allSongs,
  });
};

const searchSongs = (q) => async (dispatch) => {
  const allSongs = await getAll();
  dispatch({
    type: "SEARCH_SONGS",
    query: q,
    payload: allSongs,
  });
};

const updateCurrentSong = (song) => async (dispatch) => {
  await dispatch({
    type: "UPDATE_CURRENT_SONG",
    data: song,
  });
};

export { getSongs, searchSongs, updateCurrentSong };
