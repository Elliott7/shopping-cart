import styles from "./Hero.module.css";
import Discount from "./Discount";
import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useRef } from "react";
import { brandAnimation } from "../../../../animations";

function Hero(props) {
  const midRef = useRef();
  useEffect(() => {
    brandAnimation(midRef.current);
  }, []);

  return (
    <div className={props.className} ref={midRef}>
      <div className={styles.top}>
        <div>
          <SearchBar />
        </div>
        <Discount>60%</Discount>
      </div>
      <div className={styles.bot}>
        <div className={styles.large}>Stylish Sneakers</div>
        <div className={styles.nextButtons}>
          <img
            src="/left-arrow.png"
            alt="Left pointing arrow"
            onClick={props.leftClick}
          />
          <img
            src="/right-arrow.png"
            alt="Right pointing arrow"
            onClick={props.rightClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
