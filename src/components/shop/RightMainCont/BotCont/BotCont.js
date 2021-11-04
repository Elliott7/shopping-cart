import styles from "./BotCont.module.css";
import Sizes from "./Sizes";
function BotCont(props) {
  return (
    <div className={`${props.className} ${styles.cont}`}>
      <Sizes />
      <div className={styles.name}>
        Name
        <hr />
      </div>
      <div className={styles.reviews}>
        <p>Reviews</p>
        <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
      </div>
    </div>
  );
}

export default BotCont;
