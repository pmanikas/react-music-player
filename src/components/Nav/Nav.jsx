import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLibrary } from "./../../store/actions/appearance.actions";
import LazyImage from "./../LazyImage/LazyImage";

import styles from "./Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const isLibraryOpen = useSelector(
    (state) => state.appearanceState.isLibraryOpen
  );
  const dispatch = useDispatch();
  const dispatchToggleLibrary = () => dispatch(toggleLibrary());

  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>
      <div className={styles.logo}>
        <LazyImage src="/images/chill-vibes-logo.png" alt="Chill Vibes Logo" />
      </div>
        Chill Vibes</h1>
      <button
        onClick={() => dispatchToggleLibrary()}
        className={styles.navButton}
      >
        {isLibraryOpen ? ('Close') : ('Library')} &nbsp;
        <FontAwesomeIcon icon={faStream} />
      </button>
    </nav>
  );
};

export default Nav;
