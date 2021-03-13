import React from "react";
import { useDispatch } from "react-redux";
import { toggleLibrary } from "./../../store/actions/appearance.actions";

import styles from "./Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {

  const dispatch = useDispatch();
  const dispatchToggleLibrary = () => dispatch(toggleLibrary());

  return (
    <nav className={styles.nav}>
      <h1>Waves</h1>
      <button
        onClick={() => dispatchToggleLibrary()}
        className={styles.navButton}
      >
        Library &nbsp;
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
