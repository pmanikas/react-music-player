const initState = {
  songs: [],
  currentSong: {},
};

const songsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_SONGS":
      return {
        ...state,
        songs: action.payload,
        currentSong: action.payload[0],
      };
    case "UPDATE_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return { ...state };
  }
};

export default songsReducer;
