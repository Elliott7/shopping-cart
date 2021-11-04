import NavBar from "../navbar/NavBar";
import styles from "./LeftMainCont.module.css";
import Hero from "./Hero/Hero";
import Carousel from "./Carousel/Carousel";
import { useEffect, useRef } from "react";
import { navAnimation } from "../../../animations";
import { Link } from "react-router-dom";

function LeftMainCont(props) {
  const navRef = useRef();

  useEffect(() => {
    navAnimation(navRef.current);
  }, []);

  return (
    <div className={props.className}>
      <header className={styles.header} ref={navRef}>
        <Link to="/home">
          <figure className={styles.logo}>
            <img src="/logo.png" alt="Nike logo" />
          </figure>
        </Link>

        <NavBar className={styles.headerChild} />
      </header>
      <Hero
        className={styles.hero}
        len={props.len}
        currentID={props.currentID}
      />

      <Carousel data={props.data} filter={props.filter} />
    </div>
  );
}

export default LeftMainCont;
