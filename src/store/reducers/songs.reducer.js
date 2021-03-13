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
    case "SEARCH_SONGS":
      return {
        ...state,
        songs: action.payload.filter(song => JSON.stringify(song).toLowerCase().match(action.query.toLowerCase())),
      };
    case "UPDATE_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.data,
      };
    default:
      return { ...state };
  }
};

export default songsReducer;
