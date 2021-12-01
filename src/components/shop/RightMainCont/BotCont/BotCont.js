import styles from "./BotCont.module.css";
import Sizes from "./Sizes";
import { sizeAnimation } from "../../../../animations";
import { useEffect, useRef, useState } from "react";

function BotCont(props) {
  const sizeRef = useRef();
  useEffect(() => {
    sizeAnimation(sizeRef.current);
  }, []);

  // Passed down into Sizes and then up into shopping cart
  const [shoeSize, setShoeSize] = useState();
  const updateSize = (value) => {
    setShoeSize(value);
  };

  // Lifts purchase up and into the shopping cart
  const onBuyClick = () => {
    const purchase = {
      name: props.name,
      price: props.price,
      size: shoeSize,
      src: props.src,
      key: Math.random(),
    };
    props.addItem(purchase);
  };

  return (
    <div className={`${props.className} ${styles.cont}`} ref={sizeRef}>
      <Sizes updateSize={updateSize} />
      <div className={styles.name}>
        <span>
          {props.name}
          <br />
          <sub>{props.price}</sub>
        </span>
        <button className={styles.buyButton} onClick={onBuyClick}>
          Buy
        </button>
      </div>
      <div className={styles.hrDiv}>
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
