import styles from "./BotCont.module.css";
import Sizes from "./Sizes";
import { sizeAnimation } from "../../../../animations";
import { useEffect, useRef } from "react";

function BotCont(props) {
  const sizeRef = useRef();
  useEffect(() => {
    sizeAnimation(sizeRef.current);
  }, []);

  return (
    <div className={`${props.className} ${styles.cont}`} ref={sizeRef}>
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
