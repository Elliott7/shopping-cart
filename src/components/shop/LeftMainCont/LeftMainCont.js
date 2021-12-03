import NavBar from "../navbar/NavBar";
import styles from "./LeftMainCont.module.css";
import Hero from "./Hero/Hero";
import Carousel from "./Carousel/Carousel";
import { useEffect, useRef, useState } from "react";
import { navAnimation } from "../../../animations";
import { Link } from "react-router-dom";

function LeftMainCont(props) {
  const navRef = useRef();

  useEffect(() => {
    navAnimation(navRef.current);
  }, []);

  let [carouselArray, setCarouselArray] = useState([0, 1, 2, 3, 4, 5]);

  const leftClick = () => {
    setCarouselArray((prevState) => {
      let arr = [...prevState];
      let num = arr.shift();
      arr.push(num);
      return arr;
    });
  };
  const rightClick = () => {
    setCarouselArray((prevState) => {
      let arr = [...prevState];
      let num = arr.pop();
      arr.unshift(num);
      return arr;
    });
  };

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
        leftClick={leftClick}
        rightClick={rightClick}
      />

      <Carousel
        data={props.data}
        order={carouselArray}
        filter={props.filter}
        mobilePopUp={props.mobilePopUp}
      />
    </div>
  );
}

export default LeftMainCont;
