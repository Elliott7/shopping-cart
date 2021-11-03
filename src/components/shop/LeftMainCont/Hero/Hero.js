import styles from "./Hero.module.css";
import Discount from "./Discount";
import SearchBar from "./SearchBar/SearchBar";

function Hero(props) {
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
          <img src="/left-arrow.png" alt="Left pointing arrow" />
          <img src="/right-arrow.png" alt="Right pointing arrow" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
