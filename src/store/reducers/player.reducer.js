const initState = {
  isPlaying: false,
};

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case "PLAY":
      return {
        ...state,
        isPlaying: true,
      };
    case "PAUSE":
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return { ...state };
  }
};

export default playerReducer;