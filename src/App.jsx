import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongs } from "./store/actions/songs.actions";
import Library from "./components/Library/Library";
import Player from "./components/Player/Player";
import HeroSong from "./components/HeroSong/HeroSong";
import Nav from "./components/Nav/Nav";
import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, []);

  const audioRef = useRef(null);

  const isLibraryOpen = useSelector(
    (state) => state.appearanceState.isLibraryOpen
  );

  return (
    <div>
      <div
        className={`${styles.mainContent} ${
          isLibraryOpen ? styles.slidedRight : ""
        }`}
      >
        <Nav />
        <HeroSong />
        <Player audioRef={audioRef} />
      </div>
      <Library audioRef={audioRef} />
    </div>
  );
}

export default App;
