import styles from "./Hero.module.css";
import Discount from "./Discount";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";

function Hero(props) {
  // const [left, setLeft] = useState(props.len - 1);
  // const [right, setRight] = useState(1);
  // const leftClick = () => {
  //   document.location = `#C${left}`;
  //   setLeft((prevState) => {
  //     if (prevState === 0) {
  //       return props.len - 1;
  //     }
  //     return prevState - 1;
  //   });
  // };
  //
  // const rightClick = () => {
  //   if (left <= props.len - 3) {
  //     document.location = `#C${left + 2}`;
  //     setLeft((prevState) => prevState + 1);
  //   } else {
  //     document.location = `#C${left - props.len + 2}`;
  //     setLeft((prevState) => prevState + 1);
  //   }
  //   console.log(left <= props.len - 2);
  // };

  return (
    <div className={props.className}>
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
            // onClick={leftClick}
          />
          <img
            src="/right-arrow.png"
            alt="Right pointing arrow"
            // onClick={rightClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
