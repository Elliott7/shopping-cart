import styles from "./Discount.module.css";
import { discountAnimation } from "../../../../animations";
import { useRef, useEffect } from "react";

function Discount(props) {
  const discountRef = useRef();

  useEffect(() => {
    discountAnimation(discountRef.current);
  }, []);

  return (
    <div className={` ${props.className}`} ref={discountRef}>
      <p className={styles.discount}>{props.children}</p>
      <hr />
      <p className={styles.discountText}>SAVE UP TO</p>
    </div>
  );
}

export default Discount;
