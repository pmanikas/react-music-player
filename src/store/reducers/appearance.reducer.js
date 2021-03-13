const initState = {
  isLibraryOpen: false,
};

const apperanceReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_LIBRARY":
      return { ...state, isLibraryOpen: !state.isLibraryOpen };
    default:
      return { ...state };
  }
};

export default apperanceReducer;
