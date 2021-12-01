import React from "react";
import styles from "./ShoppingCartItem.module.css";

const ShoppingCartItem = (props) => {
  const handleClick = () => {
    props.removeItem(props.itemKey);
  };
  return (
    <div className={styles.itemParent}>
      <img src={props.src} alt="" className={styles.itemPicture} />
      <div className={styles.itemCont}>
        <div className={styles.itemName}>
          <div>
            {props.name} - Size {props.size}
          </div>
          <button onClick={handleClick}>x</button>
        </div>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
