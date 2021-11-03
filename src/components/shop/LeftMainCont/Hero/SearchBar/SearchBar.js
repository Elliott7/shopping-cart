import styles from "./SearchBar.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function SearchBar(props) {
  const searchRef = useRef();

  useEffect(() => {
    gsap.from(searchRef.current, {
      opacity: 0,
      delay: 1.8,
      duration: 2.8,
      ease: "elastic.out(1,0.3)",
      y: -100,
    });
  }, []);

  return (
    <div className={`${props.className} ${styles.searchCont}`} ref={searchRef}>
      <input className={styles.searchBar} type="text" />
      <img
        className={styles.searchIcon}
        src="/search-icon.png"
        alt="Search Icon"
      />
    </div>
  );
}

export default SearchBar;
