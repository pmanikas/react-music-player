import React from "react";
import styles from "./Search.module.scss";
import lazyType from "./../../utils/lazyType.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const LAZY_DELAY = 300;

const Search = ({ commitSearch }) => {
  const searchHandler = (e) => lazyType(() => commitSearch(e), LAZY_DELAY);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        onChange={searchHandler}
        className={styles.searchInput}
      />
      <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
    </div>
  );
};

export default Search;
