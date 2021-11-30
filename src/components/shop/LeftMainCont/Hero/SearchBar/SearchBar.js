import styles from "./SearchBar.module.css";
import { useEffect, useRef } from "react";
import { searchAnimation } from "../../../../../animations";

function SearchBar(props) {
  const searchRef = useRef();

  useEffect(() => {
    searchAnimation(searchRef.current);
  }, []);

  return (
    <div className={`${props.className} ${styles.searchCont}`} ref={searchRef}>
      <input className={styles.searchBar} type="text" aria-label="Search Box" />
      <img
        className={styles.searchIcon}
        src="/search-icon.png"
        alt="Search Icon"
      />
    </div>
  );
}

export default SearchBar;
