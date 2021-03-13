import { combineReducers } from "redux";
import songsReducer from "./songs.reducer";
import appearanceReducer from "./appearance.reducer";
import playerReducer from "./player.reducer";

const rootReducer = combineReducers({
  songsState: songsReducer,
  appearanceState: appearanceReducer,
  playerState: playerReducer,
});

export default rootReducer;